import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from '../../../presentation/rest/usuario/dto/create-user.dto';
import { Usecase } from 'src/abstract/usecase';
import { Usuario } from '../entity/usuario.entity';
import { IUsuarioRepository } from '../repository/user.repository';
import { PROVIDER } from '../constants/provider';

@Injectable()
export class CreateUsusarioUsecase
  implements Usecase<CreateUsuarioDto, Usuario>
{
  constructor(
    @Inject(PROVIDER.USUARIOREPOSITORY)
    private readonly repository: IUsuarioRepository,
  ) {}
  public async execute(input: CreateUsuarioDto): Promise<Usuario> {
    return this.repository.create(input);
  }
}
