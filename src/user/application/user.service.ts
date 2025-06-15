import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../infrastructure/user.repository';
import { User } from '../domain/user.entity';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(name: string, email: string): Promise<User> {
    return await this.userRepository.createUser(name, email);
  }

  async getUserById(id: string): Promise<User> {
    return await this.userRepository.findUserById(id);
  }

  async getAllUsers() {
    return await this.userRepository.findAllUsers();
  }
  async updateUser(id: string, name: string, email: string): Promise<User> {
    return await this.userRepository.updateUser(id, name, email);
  }
}
