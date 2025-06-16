import { Module } from '@nestjs/common';
import { UserController } from './user/interfaces/user.controller';
import { UserService } from './user/application/user.service';
import { UserRepository } from './user/infrastructure/user.repository';
import { CassandraService } from './user/application/CassandraService';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10,
      max: 100,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, CassandraService],
  exports: [UserService, UserRepository, CassandraService],
})
export class AppModule {}
