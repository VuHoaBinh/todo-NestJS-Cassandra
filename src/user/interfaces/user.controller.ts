import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { UserService } from '../application/user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(
      createUserDto.name,
      createUserDto.email,
    );
    if (!user) {
      throw new Error('User creation failed');
    }
    return user;
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  @Get()
  async getUsers() {
    return await this.userService.getAllUsers();
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.userService.updateUser(
      id,
      updateUserDto.name,
      updateUserDto.email,
    );

    if (!user) {
      throw new Error('User update failed');
    }
    return user;
  }
}
