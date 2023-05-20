import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('/signup')
  signUp() {
    return this.auth.signUp();
  }
  @Post('/login')
  logIn() {
    return this.auth.logIn();
  }
}
