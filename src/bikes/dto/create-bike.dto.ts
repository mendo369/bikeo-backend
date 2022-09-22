import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBikeDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  model: number;

  @IsNotEmpty()
  size: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  image: string;
}
