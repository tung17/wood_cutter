import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import {deviceGroupSchema} from './../shared/database/schema/device_group.schema'
import {DeviceGroupService} from './device_group.service';
import {DeviceGroupController} from './device_group.controller';

@Module({
    // imports:[MongooseModule.forFeature([{name:'device_group',schema:deviceGroupSchema}])],
    providers:[DeviceGroupService],
    controllers:[DeviceGroupController]
})

export class deviceGroupModule {}