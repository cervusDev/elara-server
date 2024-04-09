import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './usecases/auth/auth.module';
import { UsersModule } from './usecases/users/users.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule],
})

export class AppModule {}
