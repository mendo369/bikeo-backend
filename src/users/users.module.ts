import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, Userschema } from './schema/user.schema';
import { Bike, Bikeschema } from '../bikes/schema/bike.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: Userschema },
      { name: Bike.name, schema: Bikeschema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
