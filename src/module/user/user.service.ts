import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { UserDTO } from './dto/user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {

    users: any
    
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
            throw new Error('User does not exist!');
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
            throw new Error('User does not exist!');
        } 

        return await this.prisma.user.delete({
            where: {
                id,
            },
        });
    }
    async findByEmail(email: string): Promise<User | undefined> {
        return this.prisma.user.findFirst({
        where: {
            email: email,
        },
        });
    }
};
