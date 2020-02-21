import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export default interface IDeviceGroup extends Document 
{
    name:String;
    type:String;
    index:Number;
    user:any;
    users:{type:mongoose.Types.ObjectId,ref:'user'},
    admins:{type:mongoose.Types.ObjectId,ref:'admin'}
}