import { Module } from '@nestjs/common';
import { CustomLogger } from './logger.service';
import { configure, getLogger } from 'log4js';

const config = {
  appenders: {
    access: {
      type: 'file',
      filename: 'log/trace.log',
      maxLogSize: 10485760,
      category: 'access',
      layout: {
        type: 'pattern',
        pattern:
          '[%d{yyyy/MM/dd hh:mm:ss}],[%p],[%X{ip}],[%X{method} %X{uri}],[%X{file} %X{line}:%X{column} %X{function}],%m',
      },
    },
    console: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern:
          '[%d{yyyy/MM/dd hh:mm:ss}],[%p],[%X{ip}],[%X{method} %X{uri}],[%X{file} %X{line}:%X{column} %X{function}],%m',
      },
    },
  },
  categories: {
    default: {
      appenders: ['access', 'console'],
      level: 'INFO',
    },
  },
};

const loggerFactory = {
  provide: CustomLogger,
  useFactory: () => {
    configure(config);
    return new CustomLogger(getLogger('default'));
  },
};

@Module({
  providers: [loggerFactory],
  exports: [loggerFactory],
})
export class LoggerModule {}
