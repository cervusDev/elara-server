import { InMemoryRepository } from 'src/abstract/inmemmory';
import { Usuario } from 'src/domain/usuario/entity/usuario.entity';
import { IUsuarioRepository } from 'src/domain/usuario/repository/user.repository';
import { CreateUsusarioUsecase } from 'src/domain/usuario/usecases/create-user.usecase';

type Mock = {
  CREAT: Usuario[];
};

interface SUT {
  repository: IUsuarioRepository;
  sut: CreateUsusarioUsecase;
}

const MOCKUSUARIO: Mock = {
  CREAT: [
    {
      id: 1,
      categoriaId: 1,
      clienteId: 1,
      email: 'gu.io@gmail.com',
      password: 'senha',
    },
  ],
};

export class UsuarioInMemmoryRepository
  extends InMemoryRepository<Usuario>
  implements IUsuarioRepository {}

const makeSut = (): SUT => {
  const repository = new UsuarioInMemmoryRepository(MOCKUSUARIO.CREAT);

  const sut = new CreateUsusarioUsecase(repository);

  return {
    sut,
    repository,
  };
};
describe('CreateUsuarioDto', () => {
  it('Deve ser possível criar um usuário', async () => {
    const { repository, sut } = makeSut();

    const usuario = await sut.execute(MOCKUSUARIO.CREAT[0]);

    const persist = await repository.getById(usuario.id);
    expect(persist).toBeTruthy();
  });
});
