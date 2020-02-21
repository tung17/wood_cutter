import IUser from './../../interface/user.interface';
import {userSchema} from './../schema/user.shema';
import * as mongoose from 'mongoose';

export const userModel = mongoose.model<IUser>('user',userSchema);
