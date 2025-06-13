import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { CassandraService } from '../application/CassandraService';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserRepository {
  constructor(private readonly cassandraService: CassandraService) {}

  async createUser(name: string, email: string): Promise<User> {
    const id = uuid();
    await this.cassandraService.execute(
      'INSERT INTO users (id, name, email) VALUES (?, ?, ?)',
      [id, name, email],
    );
    return { id, name, email };
  }

  async findUserById(id: string): Promise<User> {
    const result = await this.cassandraService.execute(
      'SELECT * FROM users WHERE id = ?',
      [id],
    );
    console.log(result);
    return result[0];
  }

  findAllUsers() {
    return this.cassandraService.execute('SELECT * FROM users');
  }

  async updateUser(id: string, name: string, email: string): Promise<User> {
    await this.cassandraService.execute(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, id],
    );
    return { id, name, email };
  }
}
