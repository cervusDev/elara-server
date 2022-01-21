import { Module } from '@nestjs/common';
import { CreateUsusarioUsecase } from 'src/domain/usuario/usecases/create-user.usecase';
import { UsuarioController } from './usuario.controller';

@Module({
  controllers: [UsuarioController],
  providers: [CreateUsusarioUsecase],
})
export class UsuarioModule {}
