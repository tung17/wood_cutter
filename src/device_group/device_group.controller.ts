import {Controller,Get,Param,Post,Put,Delete,Body,UseGuards,Request,Response,NotFoundException} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {DeviceGroupService} from './device_group.service';
import {deviveGroupDto} from './dto/device_group.dto';
import {BaseResponse} from './../shared/helper/base.response';
import * as _ from 'lodash';

@Controller('device_groups')
@UseGuards(AuthGuard('jwt'))
export class DeviceGroupController
{
    constructor(private deviceGroupService:DeviceGroupService){}
    @Get()
    async get(@Request() req,@Response() res)
    {
        let data =  await this.deviceGroupService.findAll(req.user);
        if(_.isEmpty(data))
        {
            throw new NotFoundException('resource không tìm thấy')
        }
        return BaseResponse.success(req,res,data);
    }

    @Post()
    async post(@Body() data: deviveGroupDto,@Request() req,@Response() res)
    {
        data.user = req.user;
        let result = await this.deviceGroupService.create(data);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result);
    }

    @Put()
    async put(@Body() data: deviveGroupDto,@Request() req,@Response() res)
    {
        let result = await this.deviceGroupService.update(data._id,data);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }

    @Delete()
    async delete(@Param() id:string,@Request() req,@Response() res)
    {
        let result = await this.deviceGroupService.delete(id);
        if(_.isEmpty(result))
        {
            throw new NotFoundException('resource không tìm thấy');
        }
        return BaseResponse.success(req,res,result)
    }
}