import { Injectable,UnauthorizedException } from '@nestjs/common';
import IAdminExtend from './../shared/interface/admin_extend.interface';
import IAdmin from './../shared/interface/admin.interface';
import IUser from './../shared/interface/user.interface';
import IUserCredential from './../shared/interface/user_credentials.interface';
import { JwtService } from '@nestjs/jwt';
import {databaseService} from './../shared/database/models';
import * as _ from 'lodash';

@Injectable()
export class AuthService
{
    constructor(
        private readonly jwtService: JwtService,
    ){}

    async login(user:any)
    {
        let payload;
        let userInfo:IUser[] = await databaseService.userModel.find({username:user.username}).populate({path:'credentials',
            match:{password:user.password}
        }).exec();

        if(_.isEmpty(userInfo) || _.isEmpty(userInfo[0].credentials))
        {
            throw new UnauthorizedException('username hoặc password sai');
        }

        if(userInfo[0].role == 'ADMIN')
        {
            let adminInfo = await databaseService.adminModel.findOne({username:user.username});
            payload = {user_id:adminInfo._id,authority:'ADMIN'}
        }
        else
        {
            payload = {user_id:userInfo[0]._id,authority:'NOMAL'};
        }
        return {
            access_token: this.jwtService.sign(payload),
          };
    }

    async register(data:IAdminExtend)
    {
        let adminCreated = new databaseService.adminModel(data);
        let adminResult = await adminCreated.save()
        return adminResult;
    }
}