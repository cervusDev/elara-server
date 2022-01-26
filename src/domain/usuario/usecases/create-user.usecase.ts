import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from '../../../presentation/rest/usuario/dto/create-user.dto';
import { Usecase } from 'src/abstract/usecase';
import { Usuario } from '../entity/usuario.entity';
import { IUsuarioRepository } from '../repository/user.repository';
import { PROVIDER } from '../constants/provider';
import { hashSync } from 'bcrypt';

@Injectable()
export class CreateUsusarioUsecase
  implements Usecase<CreateUsuarioDto, Usuario>
{
  constructor(
    @Inject(PROVIDER.USUARIOREPOSITORY)
    private readonly repository: IUsuarioRepository,
  ) {}
  public async execute({
    password,
    ...rest
  }: CreateUsuarioDto): Promise<Usuario> {
    const hash = hashSync(password, 10);
    return await this.repository.create({ password: hash, ...rest });
  }
}
