import { Module } from '@nestjs/common';
import { UserController } from './user/interfaces/user.controller';
import { UserService } from './user/application/user.service';
import { UserRepository } from './user/infrastructure/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
// import { CacheModule } from './cache/cache.module';
// import { LoggingMiddleware } from './middlewares/logging.middleware';
// import { WinstonModule } from 'nest-winston';
// import { createLogger, transports, format } from 'winston';

// @Module({
//   imports: [
//     UserModule,
//     CacheModule,
//     WinstonModule.forRoot({
//       transports: [
//         new transports.Console({
//           format: format.combine(format.timestamp(), format.json()),
//         }),
//       ],
//     }),
//   ],
// })
// export class AppModule {}

