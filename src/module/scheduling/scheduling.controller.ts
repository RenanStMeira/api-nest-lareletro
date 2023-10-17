import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { SchedulingDTO } from './dto/scheduling.dto';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}

  @Get()
  async findAll() {
    return this.schedulingService.findAll();
  }

  @Post('create')
    async create(@Body() data: SchedulingDTO) {
      return this.schedulingService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: SchedulingDTO) {
      return this.schedulingService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.schedulingService.delete(id);
    }
};
