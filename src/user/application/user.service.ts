import { Injectable } from '@nestjs/common';
import { UserRepository } from '../infrastructure/user.repository';
import { User } from '../domain/user.entity';
import { CreateUserDto } from '../interfaces/dto/create-user.dto';
import { UpdateUserDto } from '../interfaces/dto/update-user.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepository) {}

  create(dto: CreateUserDto): Promise<User> {
    const user = new User(randomUUID(), dto.name, dto.email);
    return this.repo.create(user);
  }

  findById(id: string): Promise<User | undefined> {
    return this.repo.findById(id);
  }

  update(id: string, dto: UpdateUserDto): Promise<User | undefined> {
    return this.repo.update(id, dto);
  }
}
