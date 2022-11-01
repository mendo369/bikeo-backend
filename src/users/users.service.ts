import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { Bike, BikeDocument } from '../bikes/schema/bike.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Bike.name) private bikeModule: Model<BikeDocument>,
    @InjectModel(User.name) private userModule: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userCreated = await this.userModule.create(createUserDto);
    return userCreated;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
