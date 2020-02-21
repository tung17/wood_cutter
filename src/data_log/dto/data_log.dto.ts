import { Document } from 'mongoose';

export class dataLogDto extends Document
{
    Time:String;
    value:String;
    deviceId:String;
}