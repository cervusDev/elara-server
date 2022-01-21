import { Repository } from 'src/abstract/repository';
import { Usuario } from '../entity/usuario.entity';

export type IUsuarioRepository = Repository<Usuario>;
