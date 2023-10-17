import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsDTO } from './dto/jobs.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async findAll() {
    return this.jobsService.findAll();
  }

  @Post('create')
  async create(@Body() data: JobsDTO) {
    return this.jobsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: JobsDTO) {
    return this.jobsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param(':id') id: string) {
    return this.jobsService.delete(id);
  }
}
