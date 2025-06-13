import { Module } from '@nestjs/common';
import { UserController } from './user/interfaces/user.controller';
import { UserService } from './user/application/user.service';
import { UserRepository } from './user/infrastructure/user.repository';
import { CassandraService } from './user/application/CassandraService';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, CassandraService],
  exports: [UserService, UserRepository, CassandraService],
})
export class AppModule {}
