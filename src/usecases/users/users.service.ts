import * as bcrypt from 'bcrypt';
import { Prisma } from '.prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor (private readonly prisma: PrismaService) {}

  async create(payload: CreateUserDto) {
    const data: Prisma.UsersUncheckedCreateInput = {
      ...payload,
      password: await bcrypt.hash(payload.password, 10)
    }

    const createUser = await this.prisma.users.create({ data });

    if (!createUser) {
      return new BadRequestException('erro ao criar usuário')
    }

    let parseCreateUser = Object.assign({}, createUser);

    delete parseCreateUser.password;

    return {
      ...parseCreateUser,
    }
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({ where: { email } })

    if (!user) {
      return new BadRequestException('erro ao encontrar o usuário por email');
    }

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
