import * as mongoose from 'mongoose';
import {userModel} from './../models/user.model';
import {adminModel} from './../models/admin.model';
import {userCredentialModel} from './../models/user_credentials.model';

export const adminSchema = new mongoose.Schema({
    username:String,
    email:String,
    extendInfo:String
})

adminSchema.virtual("address").get(()=>{return this.address;}).set((v)=>{this.address = v;});
adminSchema.virtual("lastName").get(()=>{return this.lastName;}).set((v)=>{this.lastName = v;});
adminSchema.virtual("firstName").get(()=>{return this.firstName;}).set((v)=>{this.firstName = v;});
adminSchema.virtual("phone").get(()=>{return this.phone;}).set((v)=>{this.phone = v;});
adminSchema.virtual("identityCard").get(()=>{return this.identityCard;}).set((v)=>{this.identityCard = v;});
adminSchema.virtual("role").get(()=>{return this.role;}).set((v)=>{this.role = v;});
adminSchema.virtual("password").get(()=>{return this.password;}).set((v)=>{this.password = v;})

adminSchema.post('save',async (doc,next)=>{
    console.log('doc',doc)
    let user = doc.toObject({ virtuals: true });
    user.admins = doc._id;
    let userSaveResult = await new userModel(user).save();
    await new userCredentialModel({password:user.password,userId:userSaveResult._id}).save();
    next();
})