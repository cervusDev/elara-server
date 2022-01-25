import { Mapper } from 'src/abstract/mapper';
import { Usuario } from 'src/domain/usuario/entity/usuario.entity';
import { CreateUsuarioDto } from '../dto/create-user.dto';

export class CreateUsuarioMapper implements Mapper<CreateUsuarioDto, Usuario> {
  mapFrom(data: CreateUsuarioDto): Usuario {
    return {
      ...data,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapTo(entity: Usuario): CreateUsuarioDto {
    throw new Error('Method not implemented.');
  }
}
