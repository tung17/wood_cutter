import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export default interface IUserCredential extends Document
{
    activateToken:String;
    password:String;
    enabled:Boolean;
    resetToken:String;
}