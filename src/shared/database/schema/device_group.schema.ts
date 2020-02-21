import * as mongoose from 'mongoose';
import {deviceGroupModel} from './../models/device_group.model';

export const deviceGroupSchema = new mongoose.Schema({
    name:String,
    type:String,
    index:Number,
    users:{type:mongoose.Types.ObjectId,ref:'user'},
    admins:{type:mongoose.Types.ObjectId,ref:'admin'}
})

deviceGroupSchema.virtual('user')
.get(()=>{
    return this.user;
})
.set((v)=>{
    this.user = v;
})

deviceGroupSchema.post('save',async (doc,next)=>
{
    let user = doc.toObject({virtuals:true}).user;
    await deviceGroupModel.findByIdAndUpdate(doc._id,user.filter);
    next();
})