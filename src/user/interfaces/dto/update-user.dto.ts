import { IsOptional, IsString, IsEmail, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;
}
