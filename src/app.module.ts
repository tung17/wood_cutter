import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {deviceGroupModule} from './device_group/device_group.module';
import {UserModule} from './user/user.module';
// import { MongooseModule } from '@nestjs/mongoose';
import {authModule} from './auth/auth.module';
import {LastLogModule} from './last_log/last_log.module';
import {DataLogModule} from './data_log/data_log.module';
import {DeviceModule} from './device/device.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/solar',{useNewUrlParser:true,useUnifiedTopology:true}),
    deviceGroupModule,
    UserModule,
    authModule,
    LastLogModule,
    DataLogModule,
    DeviceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
