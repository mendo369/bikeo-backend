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
  description: string;

  @IsNotEmpty()
  sizes: string[];

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  images: string[];

  @IsNotEmpty()
  components: object[];

  @IsNotEmpty()
  contacts: object[];
}
