import {lastLogSchema} from './../schema/last_log.schema';
import ILastlog from './../../interface/last_log.interface';
import * as mongoose from 'mongoose';

export const lastLogModel = mongoose.model<ILastlog>('lastLog',lastLogSchema);