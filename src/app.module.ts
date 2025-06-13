import { Module, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user/interfaces/user.controller';
import { UserService } from './user/application/user.service';
import { UserRepository } from './user/infrastructure/user.repository';
import { LoggingMiddleware } from './middlewares/logging.middlewares';
import { CassandraService } from './user/application/CassandraService';

@Module({
  controllers: [UserController, CassandraService],
  providers: [UserService, UserRepository, CassandraService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
