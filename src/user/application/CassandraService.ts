import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client } from 'cassandra-driver';

@Injectable()
export class CassandraService implements OnModuleInit {
  private client: Client;

  async onModuleInit() {
    this.client = new Client({
      contactPoints: ['localhost'],
      localDataCenter: 'datacenter1',
      keyspace: 'user_management',
      protocolOptions: { port: 9042 },
    });

    try {
      await this.client.connect();
      console.log('Connected oke hahaha :) ');
    } catch (err) {
      console.error('Connection error: ', err);
    }
  }

  async execute(query: string, params: any[] = []) {
    return this.client.execute(query, params, { prepare: true });
  }
}
