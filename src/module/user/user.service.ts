import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) { }

    async create(data: UserDTO) {
        const { id } = data;
        const userExistis = await this.prisma.user.findFirst({
            where: {
                id: id,
            }
        });

        if (userExistis) {
            throw new Error('User already exists');
        }

        const userCreate = await this.prisma.user.create({
            data,
        });

        return userCreate;
    }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async update(id: string, data: UserDTO) {
        const userExist = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!userExist) {
            throw new Error('User does not exists!')
        }

        return await this.prisma.user.update({
            data,
            where: {
                id
            },
        });
    }
    async delete(id: string) {
        const userExist = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!userExist) {
            throw new Error('User does not exists!')
        } 

        return await this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
};
