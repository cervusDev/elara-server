import { Body, Controller, Post } from '@nestjs/common';
import { BaseController } from 'src/abstract/controller';
import { Usuario } from 'src/domain/usuario/entity/usuario.entity';
import { CreateUsusarioUsecase } from 'src/domain/usuario/usecases/create-user.usecase';
import { CreateUsuarioDto } from './dto/create-user.dto';

@Controller()
export class UsuarioController implements BaseController<Usuario> {
  constructor(private readonly createUsuario: CreateUsusarioUsecase) {}

  @Post()
  public async create(@Body() request: CreateUsuarioDto): Promise<Usuario> {
    return this.createUsuario.execute(request);
  }
}
