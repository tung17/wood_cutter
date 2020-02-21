import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connect from './shared/database/config';
import {HttpExceptionFilter} from './shared/helper/response.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  connect();
  app.enableCors({ credentials: true, origin: true });
  await app.listen(3001);
}
bootstrap();