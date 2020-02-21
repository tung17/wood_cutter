import {Controller,Get,Post,Body,Param, Put,Delete,UseGuards,Request,NotFoundException,Response} from '@nestjs/common';
import {UserService} from './user.service';
import { AuthGuard } from '@nestjs/passport';
import {userDto} from './dto/user.dto';
import * as _ from 'lodash';
import {BaseResponse} from './../shared/helper/base.response';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UserController
{
    constructor(private userService: UserService){}
    @Get()
    async get(@Request() req,@Response() res)
    {
        let data = await this.userService.findAll(req.user);
        if(_.isEmpty(data))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,data);
    }

    @Post()
    async post(@Body() data:userDto,@Request() req,@Response() res)
    {
        if(req.user?.filter?.admins == undefined)
        {
            throw new NotFoundException('Bạn không có quyền tạo user');
        }
        data.admins = req.user.filter.admins;
        let result = await this.userService.create(data);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }

    @Put()
    async put(@Body() data:userDto,@Request() req,@Response() res)
    {
        let result = await this.userService.update(data._id,data);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }

    @Delete()
    async delete(@Param() id:string,@Request() req,@Response() res)
    {
        let result = await this.userService.delete(id);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }
}