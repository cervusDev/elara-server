import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { UsuarioModule } from './usuario/usuario.module';
import { module } from '../constants/module';

@Module({
  imports: [RouterModule.forRoutes(module), UsuarioModule],
})
export class RestModule {}
