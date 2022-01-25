/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { Usuario } from 'src/domain/usuario/entity/usuario.entity';
import { IUsuarioRepository } from 'src/domain/usuario/repository/user.repository';

@Injectable()
export class UsuarioPrismaRepository implements IUsuarioRepository {
  constructor(private readonly prisma: PrismaClient) {}
  public create({ categoriaId, ...rest }: Usuario): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: {
        ...rest,
        categoriaId: 6,
      },
    });
  }

  public update(id: number, data: Partial<Usuario>): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  public getById(id: number): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
  public getAll(): Promise<Usuario[]> {
    throw new Error('Method not implemented.');
  }
  public delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
