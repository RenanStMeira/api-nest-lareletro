import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDTO } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('create')
  async create(@Body() data: AdminDTO) {
    return this.adminService.create(data);
  }

  @Get()
  async findAll() {
    return this.adminService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: AdminDTO) {
    return this.adminService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.adminService.delete(id);
  }
}
