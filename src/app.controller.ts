import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomLogger } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: CustomLogger,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
