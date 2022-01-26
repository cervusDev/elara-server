import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { PROVIDER as USUARIO } from '../usuario/constants/provider';
import { Usuario } from '../usuario/entity/usuario.entity';
import { IUsuarioRepository } from '../usuario/repository/user.repository';

interface IUserToken {
  sub: number;
  email: string;
  nome?: string;
}

interface IValidate {
  email: string;
  password: string;
}

@Injectable()
export class AuthUsecase {
  constructor(
    @Inject(USUARIO.USUARIOREPOSITORY)
    private readonly usuarioRepository: IUsuarioRepository,
    private readonly jwtService: JwtService,
  ) {}

  public async login(user: Usuario) {
    if (user) {
      const payload: IUserToken = {
        sub: user.id,
        email: user.email,
        nome: user.name,
      };
      return {
        token: this.jwtService.sign(payload),
      };
    }
  }

  public async validateUser({ email, password }: IValidate) {
    const usuario = await this.usuarioRepository.getByEmail(email);
    if (!usuario) null;

    const senhaValida = compareSync(password, usuario.password);
    if (!senhaValida) null;

    return usuario;
  }
}
