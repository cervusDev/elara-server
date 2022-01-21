import { Module } from '@nestjs/common';
import { RestModule } from './rest/rest.module';
import { SocketModule } from './socket/socket.module';
@Module({
  imports: [RestModule, SocketModule],
})
export class PresenterModule {}
