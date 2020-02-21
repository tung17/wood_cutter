import { Injectable } from '@nestjs/common';
import IDeviceGroup from './../shared/interface/device_group.interface';
import {databaseService} from './../shared/database/models';
import IUserLogin from './../shared/interface/user_login_info.interface';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

@Injectable()
export class DeviceGroupService
{
    // constructor(@InjectModel('device_group') private readonly repo:Model<IDeviceGroup>){}

    async findAll(userInfo:IUserLogin)
    {
        return await databaseService.deviceGroupModel.find({
            ...userInfo.filter
        });
    }

    async create(data:IDeviceGroup)
    {
        let createdGroup = new databaseService.deviceGroupModel(data);
        return await createdGroup.save();
    }

    async update(id:string,data:IDeviceGroup)
    {
        let result = await databaseService.deviceGroupModel.updateOne({_id:id},data);
        return result;
    }

    async delete(id:string)
    {
        let result = await databaseService.deviceGroupModel.deleteOne({_id:id});
        return result;
    }
}