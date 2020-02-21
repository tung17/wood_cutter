import {Controller,Get,Post,
    Body,Param, Put,Delete,UseGuards,
    Request,Response,Query} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {DataLogService} from './data_log.service';
import {dataLogDto} from './dto/data_log.dto';

@Controller('data_logs')
@UseGuards(AuthGuard('jwt'))
export class DataLogController
{
    constructor(private dataLogService: DataLogService){}
    @Get()
    async get(@Query() filter:dataLogDto)
    {
        let data = await this.dataLogService.findAll(filter);
        return data;
    }

    @Post()
    async post(@Body() data:dataLogDto)
    {
        let result = await this.dataLogService.create(data);
        return result;
    }

    @Put()
    async put(@Body() data:dataLogDto)
    {
        let result = await this.dataLogService.update(data.id,data);
        return result;
    }

    @Delete()
    async delete(@Param() id:string)
    {
        let result = await this.dataLogService.delete(id);
        return result;
    }
}