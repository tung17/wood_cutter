import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export class userDto extends Document{
    username:String;
    email:String;
    address:String;
    lastName:String;
    firstName:String;
    phone:String;
    identityCard:String;
    role:String; //ADMIN,USER
    extendInfo:String;
    credentials:{type:mongoose.Types.ObjectId,ref:'user_credential'};
    admins:{type:mongoose.Types.ObjectId,ref:'admin'};
}