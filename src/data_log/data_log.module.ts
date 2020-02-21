import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import {deviceGroupSchema} from './../shared/database/schema/device_group.schema'
import {DataLogService} from './data_log.service';
import {DataLogController} from './data_log.controller';

@Module({
    // imports:[MongooseModule.forFeature([{name:'device_group',schema:deviceGroupSchema}])],
    providers:[DataLogService],
    controllers:[DataLogController]
})

export class DataLogModule {}