import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
