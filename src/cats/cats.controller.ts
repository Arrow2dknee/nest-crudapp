import {
    Controller,
    Get,
    Post,
    Redirect,
    Param,
    Body,
    Delete,
    Put,
} from '@nestjs/common';
import { of, Observable } from 'rxjs';

import { CreateCatDto, UpdateCatDto } from './dto';

import { CatsService } from './cats.service';

import { Cat } from './interfaces/cat.interface';

interface FindOneInterface {
    id: string;
}

@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService) {
        // do something
    }

    @Get()
    // @Redirect('https://nestjs.com', 301)
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<void> {
        this.catService.create(createCatDto);
    }

    // @Get() // Rxjs observables
    // findAllElements(): Observable<any[]> {
    //     return of([]);
    // }

    // @Get(':id')
    // findOne(@Param() params: FindOneInterface): string {
    //     return 'Return the cat at position ' + params.id;
    // }

    // @Put(':id')
    // update(@Param('id') id, @Body() updateCatDto: UpdateCatDto) {
    //     return 'Cat at index ' + id + ' was updated';
    // }

    // @Delete(':id')
    // delete(@Param('id') id): string {
    //     return 'Cat at index ' + id + ' was deleted';
    // }
}
