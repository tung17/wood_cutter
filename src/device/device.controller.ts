import {Controller,Get,Post,Body,Param, Put,Delete,UseGuards,Request,Response,NotFoundException} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {DeviceService} from './device.service';
import {deviceDto} from './dto/device.dto';
import * as _ from 'lodash';
import {BaseResponse} from './../shared/helper/base.response';

@Controller('devices')
@UseGuards(AuthGuard('jwt'))
export class DeviceController
{
    constructor(private deviceService: DeviceService){}
    @Get()
    async get(@Request() req,@Response() res)
    {
        let data = await this.deviceService.findAll(req.user);
        if(_.isEmpty(data))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,data);
    }

    @Post()
    async post(@Body() data:deviceDto,@Request() req,@Response() res)
    {
        data.user = req.user;
        let result = await this.deviceService.create(data);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }

    @Put()
    async put(@Body() data:deviceDto,@Request() req,@Response() res)
    {
        let result = await this.deviceService.update(data._id,data);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }

    @Delete()
    async delete(@Param() id:string,@Request() req,@Response() res)
    {
        let result = await this.deviceService.delete(id);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }
}