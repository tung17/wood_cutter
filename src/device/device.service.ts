import { Injectable } from '@nestjs/common';
import IDevice from './../shared/interface/device.interface';
import {databaseService} from './../shared/database/models';
import IUserLogin from './../shared/interface/user_login_info.interface';
// import { InjectModel } from '@nestjs/mongoose';
// import {Model} from 'mongoose';

@Injectable()
export class DeviceService
{
    async findAll(userInfo:IUserLogin)
    {
        let data = await databaseService.deviceModel.find({...userInfo.filter});
        return data;
    }

    async create(device:IDevice)
    {
        let createdDevice = new databaseService.deviceModel(device);
        return await createdDevice.save();
    }

    async update(id:String,device:IDevice)
    {
        let result = await databaseService.deviceModel.updateOne({_id:id},device);
        return result;
    }

    async delete(id:String)
    {
        let result = await databaseService.deviceModel.deleteOne({_id:id})
        return result;
    }
}