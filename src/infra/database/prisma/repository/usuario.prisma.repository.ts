import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Usuario } from 'src/domain/usuario/entity/usuario.entity';
import { IUsuarioRepository } from 'src/domain/usuario/repository/user.repository';

@Injectable()
export class UsuarioPrismaRepository implements IUsuarioRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public create(data: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({ data });
  }
}
