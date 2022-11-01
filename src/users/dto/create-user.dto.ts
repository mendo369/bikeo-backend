import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  profile: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  aboutUser: string;

  //   @IsNotEmpty()
  //   bikes: string[];

  @IsNotEmpty()
  contacts: object[];
}
