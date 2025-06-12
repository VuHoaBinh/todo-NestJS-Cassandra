import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';

@Injectable()
export class UserRepository {
  private users = new Map<string, User>();

  async create(user: User): Promise<User> {
    this.users.set(user.id, user);
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async update(id: string, data: Partial<User>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    const updated = { ...user, ...data };
    this.users.set(id, updated as User);
    return updated as User;
  }
}
