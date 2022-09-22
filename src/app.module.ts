import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikesModule } from './bikes/bikes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BikesModule, MongooseModule.forRoot('mongodb://localhost/bikeo')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
