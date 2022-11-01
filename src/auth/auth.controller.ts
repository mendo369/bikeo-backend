import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/login-auth.dto';
import { registerAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerObject: registerAuthDto) {
    return this.authService.register(registerObject);
  }

  @Post('login')
  login(@Body() loginObject: loginAuthDto) {
    return this.authService.login(loginObject);
  }
}
