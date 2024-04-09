import { Users as prismaUsers } from '.prisma/client';

export class UserEntity implements prismaUsers {
  id: number;
  
  username: string;
  
  email: string;
  password: string;

  createdAt: Date;
}
