import { DocumentBuilder } from '@nestjs/swagger';

export const swagger = new DocumentBuilder()
  .setTitle('Elara')
  .setDescription('Elara NestJS API')
  .setVersion('1.0')
  .build();
