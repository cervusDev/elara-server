import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // const prismaService: PrismaService

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

  await app.listen(3000);
}
bootstrap();
