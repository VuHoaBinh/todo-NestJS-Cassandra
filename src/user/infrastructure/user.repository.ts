import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { CassandraService } from '../application/CassandraService';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserRepository {
  constructor(private readonly cassandraService: CassandraService) {}

  async createUser(name: string, email: string): Promise<User> {
    const id = uuid();
    await this.cassandraService.execute(
      'INSERT INTO user_management (id, name, email) VALUES (?, ?, ?)',
      [id, name, email],
    );

    return { id, name, email };
  }

  async findUserById(id: string): Promise<User> {
    try {
      const result = await this.cassandraService.execute(
        'SELECT * FROM user_management WHERE id = ?',
        [id],
      );
      if (result.rows.length === 0) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return {
        id: result.rows[0].id,
        name: result.rows[0].name,
        email: result.rows[0].email,
      };
    } catch {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  findAllUsers() {
    return this.cassandraService.execute('SELECT * FROM user_management');
  }

  async updateUser(id: string, name: string, email: string): Promise<User> {
    const exitingUser = await this.findUserById(id);

    await this.cassandraService.execute(
      'UPDATE user_management SET name = ?, email = ? WHERE id = ?',
      [name, email, id],
    );
    return { id, name, email };
  }
}
