import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export class deviveGroupDto extends Document
{
    name: String;
    type: String;
    index: number;
    users:{type:mongoose.Types.ObjectId,ref:'user'};
    admins:{type:mongoose.Types.ObjectId,ref:'admin'};
    user:any;
}