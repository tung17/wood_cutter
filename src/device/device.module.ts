import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import {deviceGroupSchema} from './../shared/database/schema/device_group.schema'
import {DeviceService} from './device.service';
import {DeviceController} from './device.controller';

@Module({
    // imports:[MongooseModule.forFeature([{name:'device_group',schema:deviceGroupSchema}])],
    providers:[DeviceService],
    controllers:[DeviceController]
})

export class DeviceModule {}