import { Injectable } from '@nestjs/common';
import { CustomLogger } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(private logger: CustomLogger) {}

  getHello(): string {
    this.logger.log('Hello NestJS log!!');
    this.logger.error('Hello NestJS error!!');
    this.logger.warn('Hello NestJS warn!!');
    this.logger.debug('Hello NestJS debug!!');
    return 'Hello NestJS!';
  }
}
