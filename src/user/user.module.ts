import {Module} from '@nestjs/common'
// import { MongooseModule } from '@nestjs/mongoose';
// import {userSchema} from './../shared/database/schema/user.shema';
import {UserService} from './user.service';
import {UserController} from './user.controller';

@Module({
    // imports: [MongooseModule.forFeature([{name:'user',schema:userSchema}])],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule{}