import { Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './infra/database/prisma/prisma.module';
import { PresenterModule } from './presentation/presenter.module';
import { SharedModule } from './shared/shared.module';

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
    SharedModule,
  ],
  exports: [HttpModule],
})
export class AppModule {}
