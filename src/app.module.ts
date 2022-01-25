import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { PresenterModule } from './presentation/presenter.module';
import { IocModule } from './ioc/ioc.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    // Comunicação com servidores externos
    HttpModule,
    PresenterModule,
    IocModule,
  ],
  exports: [HttpModule, IocModule],
})
export class AppModule {}
