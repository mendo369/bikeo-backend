import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { loginAuthDto } from './login-auth.dto';

export class registerAuthDto extends PartialType(loginAuthDto) {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  profile: string;

  aboutUser: string;

  @IsNotEmpty()
  contacts: object[];
}
