import {Document} from 'mongoose';

export default interface IDataLog extends Document
{
    Time:String;
    value:String;
    deviceId:String;
}