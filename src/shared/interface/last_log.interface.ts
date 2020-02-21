import {Document} from 'mongoose';

export default interface ILastLog extends Document
{
    Time:String;
    value:String;
    deviceId:String;
}