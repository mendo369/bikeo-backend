import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Bike, BikeDocument } from './schema/bike.schema';
import { Model } from 'mongoose';

@Injectable()
export class BikesService {
  constructor(
    @InjectModel(Bike.name) private bikeModule: Model<BikeDocument>,
  ) {}

  async create(createBikeDto: CreateBikeDto) {
    const bikeCreated = await this.bikeModule.create(createBikeDto);
    return bikeCreated;
  }

  async findAll() {
    const bikes = await this.bikeModule.find({});
    return bikes;
  }

  async findOne(id: string) {
    const bike = await this.bikeModule.find({ _id: id });
    return bike;
  }

  update(id: number, updateBikeDto: UpdateBikeDto) {
    return `This action updates a #${id} bike`;
  }

  remove(id: number) {
    return `This action removes a #${id} bike`;
  }
}
