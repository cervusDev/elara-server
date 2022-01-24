import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // configuações swagger
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      // remove o objeto não validator por um decorator
      whitelist: true,
      // lança uma exceção relacionada a requisição
      errorHttpStatusCode: 422,
      // transforma o tipo primitivo de acordo com o DTO
      transform: true,
    }),
  );

  await app.listen(3002);
}
bootstrap();
