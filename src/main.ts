import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { AppModule } from './app.module';

interface ServerConfig {
  port: number;
}

async function bootstrap() {
  const serverConfig: ServerConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application is listening on port: ${ port }`);
}

bootstrap();
