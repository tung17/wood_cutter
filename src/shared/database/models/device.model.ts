import IDevice from './../../interface/device.interface';
import {deviceSchema} from './../schema/device.schema';
import * as mongoose from 'mongoose';

export const deviceModel = mongoose.model<IDevice>('device',deviceSchema);