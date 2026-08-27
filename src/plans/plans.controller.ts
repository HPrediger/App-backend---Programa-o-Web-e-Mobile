import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {
    constructor(private readonly service: PlansService) { }

    @Post()
    async create(
        @Body() body: { name: string; price: number }
    ) {
        return await this.service.create(body.name, body.price);
    }

    @Get()
    async findAll() {
        return await this.service.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id', ParseIntPipe) id: number
    ) {
        return await this.service.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: { name: string; price: number }
    ) {
        return await this.service.update(
            id,
            body.name,
            body.price
        );
    }

    @Delete(':id')
    async remove(
        @Param('id', ParseIntPipe) id: number
    ) {
        return await this.service.remove(id);
    }
}