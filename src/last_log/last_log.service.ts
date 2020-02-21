import { Injectable } from '@nestjs/common';
import ILastLog from './../shared/interface/last_log.interface';
import {databaseService} from './../shared/database/models';
// import { InjectModel } from '@nestjs/mongoose';
// import {Model} from 'mongoose';

@Injectable()
export class LastLogService
{
    // constructor(@InjectModel('lastLog') private repo:Model<IlastLog>){}

    async findAll(filter:ILastLog)
    {
        let data = await databaseService.lastLogModel.find(filter);
        return data;
    }

    async create(lastLog:ILastLog)
    {
        let createdLastLog = new databaseService.lastLogModel(lastLog);
        return await createdLastLog.save();
    }

    async update(id:String,lastLog:ILastLog)
    {
        let result = await databaseService.lastLogModel.updateOne({_id:id},lastLog);
        return result;
    }

    async delete(id:String)
    {
        let result = await databaseService.lastLogModel.deleteOne({_id:id})
        return result;
    }
}