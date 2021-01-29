import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CustomLogger } from './logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: CustomLogger) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.setRequestInfo(req);
    next();
  }
}
