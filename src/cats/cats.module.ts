import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/logger/logger.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [LoggerModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
