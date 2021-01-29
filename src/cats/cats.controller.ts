import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CustomLogger } from '../logger/logger.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService, private logger: CustomLogger) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    this.logger.error('CatsController findAll error!');
    return this.catsService.findAll();
  }
}
