import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PlansService {
    constructor(
        private prisma: PrismaService
    ) { }

    async create(name: string, price: number) {
        return await this.prisma.plan.create({
            data: {
                name,
                price,
            },
        });
    }

    async findAll() {
        return await this.prisma.plan.findMany();
    }

    async findOne(id: number) {
        return await this.prisma.plan.findUnique({
            where: { id },
        });
    }

    async update(id: number, name: string, price: number) {
        return await this.prisma.plan.update({
            where: { id },
            data: {
                name,
                price,
            },
        });
    }

    async remove(id: number) {
        return await this.prisma.plan.delete({
            where: { id },
        });
    }
}