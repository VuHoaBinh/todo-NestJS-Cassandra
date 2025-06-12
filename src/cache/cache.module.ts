import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10, // 10 seconds TTL for cache
      max: 100, // max number of items in cache
    }),
  ],
})
export class CacheModule {}
