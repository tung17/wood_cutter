import * as mongoose from 'mongoose';
import {userModel} from './../models/user.model';

export const userCredentialSchema = new mongoose.Schema({
    activateToken:String,
    password:String,
    enabled:Boolean,
    resetToken:String
});

userCredentialSchema.virtual('userId').get(()=>{return this.userId;}).set((v)=>{this.userId = v})

userCredentialSchema.post('save',async (doc,next)=>{
    let userId = doc.toObject({virtuals:true}).userId;
    await userModel.findByIdAndUpdate(userId,{credentials:doc._id});
    next();
})