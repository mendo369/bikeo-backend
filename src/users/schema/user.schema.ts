import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Bike } from '../../bikes/schema/bike.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true })
  userName: string;

  @Prop()
  profile: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  aboutUser: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bike' }] })
  bikes: Bike[];

  @Prop([Object])
  contacts: object[];
}

export const Userschema = SchemaFactory.createForClass(User);
