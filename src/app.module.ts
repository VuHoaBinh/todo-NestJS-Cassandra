import { Module } from '@nestjs/common';
import { UserController } from './user/interfaces/user.controller';
import { UserService } from './user/application/user.service';
import { UserRepository } from './user/infrastructure/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
