import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BikeDocument = Bike & Document;

@Schema()
export class Bike {
  @Prop()
  brand: string;

  @Prop()
  name: string;

  @Prop()
  model: number;

  @Prop()
  size: string;

  @Prop()
  price: number;

  @Prop()
  image: string;
}

export const Bikeschema = SchemaFactory.createForClass(Bike);
