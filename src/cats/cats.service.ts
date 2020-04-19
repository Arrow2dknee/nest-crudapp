import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/common/exceptions/forbidden.exception';
// import { CreateCatDto } from './dto'

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    constructor() {
        // do something
    }

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        try {
            return this.cats;
        } catch (err) {
            throw new ForbiddenException();
        }
    }
}
