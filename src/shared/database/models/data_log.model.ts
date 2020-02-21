import {dataLogSchema} from './../schema/data_log.schema';
import IDatalog from './../../interface/data_log.interface';
import * as mongoose from 'mongoose';

export const dataLogModel = mongoose.model<IDatalog>('datalog',dataLogSchema)