/* eslint-disable @typescript-eslint/no-unused-vars */
import { InMemoryRepository } from 'src/abstract/inmemmory';
import { Usuario } from 'src/domain/usuario/entity/usuario.entity';
import { IUsuarioRepository } from 'src/domain/usuario/repository/user.repository';
import { CreateUsusarioUsecase } from 'src/domain/usuario/usecases/create-user.usecase';

type Mock = {
  CREATE: Usuario[];
};

interface SUT {
  repository: IUsuarioRepository;
  sut: CreateUsusarioUsecase;
}

const MOCKUSUARIO: Mock = {
  CREATE: [
    {
      id: 1,
      email: 'gu.io@gmail.com',
      password: 'senha',
      name: 'Gustavo',
    },
  ],
};

export class UsuarioInMemmoryRepository
  extends InMemoryRepository<Usuario>
  implements IUsuarioRepository
{
  getByEmail(email: string): Promise<Usuario> {
    throw new Error('Method not implemented.');
  }
}

const makeSut = (): SUT => {
  const repository = new UsuarioInMemmoryRepository(MOCKUSUARIO.CREATE);

  const sut = new CreateUsusarioUsecase(repository);

  return {
    sut,
    repository,
  };
};
describe('CreateUsuarioDto', () => {
  it('Deve ser possível criar um usuário', async () => {
    const { repository, sut } = makeSut();

    const usuario = await sut.execute(MOCKUSUARIO.CREATE[0]);

    const persist = await repository.getById(usuario.id);
    expect(persist).toBeTruthy();
  });
});
