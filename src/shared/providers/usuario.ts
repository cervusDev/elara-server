import { Provider } from '@nestjs/common';
import { PROVIDER } from 'src/domain/usuario/constants/provider';
import { UsuarioPrismaRepository } from 'src/infra/database/prisma/repository/usuario.prisma.repository';

export const UsuarioRepository: Provider = {
  provide: PROVIDER.USUARIOREPOSITORY,
  useClass: UsuarioPrismaRepository,
};
