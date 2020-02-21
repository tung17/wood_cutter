import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export default interface IAdmin extends Document {
    username: string;
    email: string;
    extendInfo?: string;
}