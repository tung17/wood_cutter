import {Controller,Get,Post,
    Body,Param, Put,Delete,
    UseGuards,Request,Query} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {LastLogService} from './last_log.service';
import {lastLogDto} from './dto/last_log.dto';

@Controller('last_logs')
@UseGuards(AuthGuard('jwt'))
export class lastLogController
{
    constructor(private lastLogService: LastLogService){}
    @Get()
    async get(@Query() filter:lastLogDto)
    {
        let data = await this.lastLogService.findAll(filter);
        return data;
    }

    @Post()
    async post(@Body() data:lastLogDto,@Request() req)
    {
        let result = await this.lastLogService.create(data);
        return result;
    }

    @Put()
    async put(@Body() data:lastLogDto,@Request() req)
    {
        let result = await this.lastLogService.update(data.id,data);
        return result;
    }

    @Delete()
    async delete(@Param() id:string,@Request() req)
    {
        let result = await this.lastLogService.delete(id);
        return result;
    }
}