import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UsuarioRepository } from './providers/usuario';

@Module({
  providers: [UsuarioRepository, PrismaClient],
  exports: [UsuarioRepository],
})
export class IocModule {}
