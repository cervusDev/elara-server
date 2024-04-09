export interface UserPayload {
  username: string;
  email: string;
  id: number;
}

export interface LoginRequestBody {
  email: string,
  password: string;
}

import { Request } from 'express';
import { UserEntity } from 'src/usecases/users/entities/user.entity';

export interface AuthRequest extends Request {
  principal: UserEntity;
}