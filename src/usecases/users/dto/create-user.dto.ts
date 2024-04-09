import { UserEntity } from "../entities/user.entity";

export class CreateUserDto extends UserEntity {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;

}
