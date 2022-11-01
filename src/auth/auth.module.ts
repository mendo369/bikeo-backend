import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, Userschema } from '../users/schema/user.schema';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './jwt.constants';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: Userschema }]),
    JwtModule.register({
      secret: JwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
