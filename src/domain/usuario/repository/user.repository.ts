import { Repository } from 'src/abstract/repository';
import { Usuario } from '../entity/usuario.entity';

export interface IUsuarioRepository extends Repository<Usuario> {
  getByEmail(email: string): Promise<Usuario>;
}
