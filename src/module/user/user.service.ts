import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { PrismaService } from '../../database/PrismaService';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async create(data: UserDTO) {
        const { name, email, contact, password, address } = data;

        const userExists = await this.prisma.user.findFirst({
            where: {
                email: email,
            }
        });

        if (userExists) {
            throw new Error('User already exists');
        }

        const userCreate = await this.prisma.user.create({
            data: {
                name,
                email,
                contact,
                password,
                address,
            },
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
