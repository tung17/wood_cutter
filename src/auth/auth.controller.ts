import {Controller,Request,Post,Body,UseGuards,NotFoundException,Response} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth.service'
import {authDto} from './dto/auth.dto';
import * as _ from 'lodash';
import {BaseResponse} from './../shared/helper/base.response';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req,@Response() res)
    {
        let result =  await this.authService.login(req.user);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result);
    }

    @Post('register')
    async register(@Body() data:authDto,@Request() req,@Response() res) {
        let result = await this.authService.register(data);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result);
    }
}