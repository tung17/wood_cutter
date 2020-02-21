import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export class userDto extends Document{
    address:String;
    lastName:String;
    firstName:String;
    phone:String;
    identityCard:String;
    extendInfo:String;
    adminId?:{type:mongoose.Types.ObjectId,ref:'admin'}
}