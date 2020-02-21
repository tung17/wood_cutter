import * as mongoose from 'mongoose';
import {deviceModel} from './../models/device.model';

export const dataLogSchema = new mongoose.Schema({
    Time:String,
    value:String,
    deviceId:String
})