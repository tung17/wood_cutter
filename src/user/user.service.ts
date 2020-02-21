import { Injectable } from '@nestjs/common';
import IUser from './../shared/interface/user.interface';
import {databaseService} from './../shared/database/models';
import IUserLogin from './../shared/interface/user_login_info.interface';
// import { InjectModel } from '@nestjs/mongoose';
// import {Model} from 'mongoose';

@Injectable()
export class UserService
{
    // constructor(@InjectModel('user') private repo:Model<IUser>){}

    async findAll(userInfo:IUserLogin)
    {
        let data = await databaseService.userModel.find({...userInfo.filter});
        return data;
    }

    async create(user:IUser)
    {
        let createduser = new databaseService.userModel(user);
        return await createduser.save();
    }

    async update(id:String,user:IUser)
    {
        let result = await databaseService.userModel.updateOne({_id:id},user);
        return result;
    }

    async delete(id:String)
    {
        let result = await databaseService.userModel.deleteOne({_id:id})
        return result;
    }
}