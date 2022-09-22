import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bike, Bikeschema } from './schema/bike.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bike.name, schema: Bikeschema }]),
  ],
  controllers: [BikesController],
  providers: [BikesService],
})
export class BikesModule {}
