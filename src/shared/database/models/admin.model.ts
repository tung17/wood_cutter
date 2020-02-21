import IAdmin from './../../interface/admin.interface';
import {adminSchema} from './../schema/admin.schema';
import * as mongoose from 'mongoose';

export const adminModel = mongoose.model<IAdmin>('admin',adminSchema)