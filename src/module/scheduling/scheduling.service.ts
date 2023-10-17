import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { SchedulingDTO } from './dto/scheduling.dto';

@Injectable()
export class SchedulingService {
    constructor(private prisma: PrismaService) {};

    async findAll() {
        return this.prisma.scheduling.findMany(); 
    }

    async create(data: SchedulingDTO) {
        const { name, email, contact, messageuser, dateService } = data;

        const schedulingCreate = await this.prisma.scheduling.create({
            data: {
                name, email, contact, messageuser, dateService
            },
        });

        return schedulingCreate;
    }

    async update(id: string, data: SchedulingDTO) {
        return await this.prisma.scheduling.update({
            data, 
            where: {
                id: id
            },
        });
    }

    async delete(id: string) {
        const scheduling = await this.prisma.scheduling.delete({
            where: {
                id,
            },
        });

        return scheduling;
    }
};
