import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export class authDto extends Document {
    username: string;
    email: string;
    address:string;
    lastname:string;
    firstname:string;
    phone:string;
    identityCard:string;
    extendInfo:string;
    password:String;
    activateToken:String;
    resetToken:String;
    enabled:Boolean;
}