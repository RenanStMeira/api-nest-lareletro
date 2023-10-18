import {
  BadRequestException,
  Body,
  Injectable,
  Param,
  Put,
} from '@nestjs/common';
import { AdminDTO } from './dto/admin.dto';
import { PrismaService } from '../../database/PrismaService';
import { Admin } from './model/admin.model';

@Injectable()
export class AdminService {
  admin: any;

  constructor(private prisma: PrismaService) {}

  async create(data: AdminDTO): Promise<Admin> {
    const { name, email, contact, password, cnpj } = data;

    if (!cnpj) {
      throw new BadRequestException('CNPJ is required');
    }

    const adminExists = await this.prisma.admin.findFirst({
      where: {
        email: email,
      },
    });

    if (adminExists) {
      throw new Error('Admin already exists');
    }

    const adminCreate = await this.prisma.admin.create({
      data: {
        name,
        email,
        contact,
        password,
        cnpj,
      },
    });

    return adminCreate;
  }

  async findAll() {
    return this.prisma.admin.findMany();
  }

  async update(id: string, data: AdminDTO) {
    const adminExist = await this.prisma.admin.findUnique({
      where: {
        id,
      },
    });

    if (!adminExist) {
      throw new Error('Admin does not exists!');
    }

    return await this.prisma.admin.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const adminExist = await this.prisma.admin.findUnique({
      where: {
        id,
      },
    });

    if (!adminExist) {
      throw new Error('Admin does not exists!');
    }

    return await this.prisma.admin.delete({
      where: {
        id,
      },
    });
  }
  async findByEmail(email: string): Promise<Admin | undefined> {
    return this.prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
  }
}
