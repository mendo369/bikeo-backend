import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class loginAuthDto {
  @IsNotEmpty()
  userName: string;

  @MinLength(5)
  @MaxLength(15)
  password: string;
}
