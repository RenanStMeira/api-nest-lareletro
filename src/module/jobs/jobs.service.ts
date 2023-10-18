import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { JobsDTO } from './dto/jobs.dto';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.jobs.findMany();
  }

  async create(data: JobsDTO) {
    const { name, description, price } = data;

    const jobsExists = await this.prisma.jobs.findFirst({
      where: {
        name: name,
      },
    });

    if (jobsExists) {
      throw new Error('Jobs already exists');
    }

    const createJobs = await this.prisma.jobs.create({
      data: {
        name,
        description,
        price,
      },
    });

    return createJobs;
  }

  async update(id: string, data: JobsDTO) {
    const jobsExist = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!jobsExist) {
      throw new Error('Jobs already exists');
    }

    return await this.prisma.jobs.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const jobsExist = await this.prisma.jobs.findUnique({
      where: {
        id,
      },
    });

    if (!jobsExist) {
      throw new Error('jobs does not exists!');
    }

    return await this.prisma.jobs.delete({
      where: {
        id,
      },
    });
  }
}
