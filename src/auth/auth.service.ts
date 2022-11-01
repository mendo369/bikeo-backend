import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { loginAuthDto } from './dto/login-auth.dto';
import { registerAuthDto } from './dto/register-auth.dto';
import { User, UserDocument } from '../users/schema/user.schema';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtAuthService: JwtService,
  ) {}

  async register(registerObject: registerAuthDto) {
    const { password } = registerObject;
    const saltRounds = 8;
    const plainToHash = await hash(password, saltRounds);
    registerObject = { ...registerObject, password: plainToHash };
    return this.userModel.create(registerObject);
  }

  async login(loginObject: loginAuthDto) {
    const { userName, password } = loginObject;
    const user = await this.userModel.findOne({ userName });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new HttpException('User or password invalid', 403);
    }

    const payload = { userName: user.userName, name: user.name, id: user._id };

    const token = this.jwtAuthService.sign(payload);

    const data = {
      userName: user.userName,
      profile: user.profile,
      token,
    };
    return data;
  }
}
