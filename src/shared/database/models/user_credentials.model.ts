import IUserCredential from './../../interface/user_credentials.interface';
import {userCredentialSchema} from './../schema/user_credentials.schema';
import * as mongoose from 'mongoose';

export const userCredentialModel = mongoose.model<IUserCredential>('user_credential',userCredentialSchema);