import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import {deviceGroupSchema} from './../shared/database/schema/device_group.schema'
import {LastLogService} from './last_log.service';
import {lastLogController} from './last_log.controller';

@Module({
    // imports:[MongooseModule.forFeature([{name:'device_group',schema:deviceGroupSchema}])],
    providers:[LastLogService],
    controllers:[lastLogController]
})

export class LastLogModule {}