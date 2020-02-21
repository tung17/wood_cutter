import IDeviceGroup from './../../interface/device_group.interface';
import {deviceGroupSchema} from './../schema/device_group.schema';
import * as mongoose from 'mongoose';

export const deviceGroupModel = mongoose.model<IDeviceGroup>('device_group',deviceGroupSchema)