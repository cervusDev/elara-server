import { Module } from '@nestjs/common';
import { UsuarioRepository } from './providers/usuario';

@Module({
  providers: [UsuarioRepository],
  exports: [UsuarioRepository],
})
export class SharedModule {}
