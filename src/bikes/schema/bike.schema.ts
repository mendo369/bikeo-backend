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
  description: string;

  @Prop([String])
  sizes: string[];

  @Prop()
  price: number;

  @Prop([String])
  images: string[];

  @Prop([Object])
  components: object[];

  @Prop([Object])
  contacts: object[];
}

export const Bikeschema = SchemaFactory.createForClass(Bike);
