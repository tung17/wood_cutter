import * as mongoose from 'mongoose';
import {deviceGroupModel} from './../models/device_group.model';
import {deviceModel} from './../models/device.model';

export const deviceSchema = new mongoose.Schema({
    name:String,
    type:String,
    index:Number,
    location:String,
    extendInfo:String,
    deviceId:String,
    deviceGroups:String,
    admins:{type:mongoose.Types.ObjectId,ref:'admin'},
    users:{type:mongoose.Types.ObjectId,ref:'user'}
})

deviceSchema.virtual('user')
.get(()=>{
    return this.user;
})
.set((v)=>{
    this.user = v;
})

deviceSchema.post('save',async (doc,next)=>{
    let object = doc.toObject({virtuals:true});
    await deviceModel.findByIdAndUpdate(doc._id,{...object.user.filter,deviceGroups:object.deviceGroups});
    next();
})