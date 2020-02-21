import * as mongoose from 'mongoose';
import {deviceModel} from './../models/device.model';

export const lastLogSchema = new mongoose.Schema({
    Time:String,
    value:String,
    deviceId:String
})

// lastLogSchema.virtual('deviceId')
// .get(()=>{
//     return this.deviceId;
// })
// .set((v)=>{
//     this.deviceId = v;
// })

// lastLogSchema.post('save',async (doc,next)=>{
//     let deviceId = doc.toObject({virtuals:true}).deviceId;
//     await deviceModel.findByIdAndUpdate(deviceId,{$push:{lastLogs:doc._id}});
//     next();
// })