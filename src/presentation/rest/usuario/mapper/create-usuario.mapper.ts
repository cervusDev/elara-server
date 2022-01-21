import { Mapper } from 'src/abstract/mapper';
import { Usuario } from 'src/domain/usuario/entity/usuario.entity';
import { CreateUsuarioDto } from '../dto/create-user.dto';

export class CreateUsuarioMapper implements Mapper<CreateUsuarioDto, Usuario> {
  mapFrom(data: CreateUsuarioDto): Usuario {
    return {
      ...data,
    };
  }

  mapTo(entity: Usuario): CreateUsuarioDto {
    return {
      ...entity,
    };
  }
}
