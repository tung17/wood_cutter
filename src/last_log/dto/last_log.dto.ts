import {Document} from 'mongoose';

export class lastLogDto extends Document
{
    Time:String;
    value:String;
    deviceId:String;
}