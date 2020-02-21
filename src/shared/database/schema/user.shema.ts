import * as mongoose from 'mongoose';
import {userModel} from './../models/user.model';
import {userCredentialModel} from './../models/user_credentials.model';

export const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    address:String,
    lastName:String,
    firstName:String,
    phone:String,
    identityCard:String,
    role:String, //ADMIN,USER
    extendInfo:String,
    credentials:{type:mongoose.Types.ObjectId,ref:'user_credential'},
    admins:{type:mongoose.Types.ObjectId,ref:'admin'}
})

userSchema.virtual('password')
.get(()=>{return this.password}).set((v)=>{this.password = v});

userSchema.post('save',async (doc,next)=>
{
    let password = doc.toObject({virtuals:true}).password;
    let credentialCreated = new userCredentialModel({password:password})
    let credentialResult = await credentialCreated.save();
    await userModel.findByIdAndUpdate(doc._id,{credentials:credentialResult._id});
    next();
})