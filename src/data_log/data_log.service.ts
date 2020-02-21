import { Injectable } from '@nestjs/common';
import IDataLog from './../shared/interface/data_log.interface';
import {databaseService} from './../shared/database/models';

@Injectable()
export class DataLogService
{
    // constructor(@InjectModel('dataLog') private repo:Model<IdataLog>){}

    async findAll(filter:IDataLog)
    {
        let data = await databaseService.dataLogModel.find(filter);
        return data;
    }

    async create(dataLog:IDataLog)
    {
        let createdDataLog = new databaseService.dataLogModel(dataLog);
        return await createdDataLog.save();
    }

    async update(id:String,dataLog:IDataLog)
    {
        let result = await databaseService.dataLogModel.updateOne({_id:id},dataLog);
        return result;
    }

    async delete(id:String)
    {
        let result = await databaseService.dataLogModel.deleteOne({_id:id})
        return result;
    }
}