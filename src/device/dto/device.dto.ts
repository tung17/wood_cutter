import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export class deviceDto extends Document
{
    name:String;
    type:String;
    index:Number;
    location:String;
    extendInfo:String;
    deviceGroups:String;
    deviceId:String;
    user:any;
    users:{type:mongoose.Types.ObjectId,ref:'user'};
    admins:{type:mongoose.Types.ObjectId,ref:'admin'};
}