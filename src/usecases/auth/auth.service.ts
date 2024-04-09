import * as bcrypt from 'bcrypt';
import { UserPayload } from './models';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

export interface UserToken {
  accessToken: string;
}


@Injectable()
export class AuthService {
  constructor (
    private readonly jwt: JwtService,
    private readonly users: UsersService
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.validate(email, password);

    const payload: UserPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
    }

    return {
      accessToken: this.jwt.sign(payload)
    };
  }

  private async validate(email: string, password: string) {
    const user = await this.users.findByEmail(email) as any;

    if (!user) {
      return new UnauthorizedException('erro ao encontrar usuário.')
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return new BadRequestException('senha invalida');
    }

    return {
      ...user, password: undefined
    }
  }
}
