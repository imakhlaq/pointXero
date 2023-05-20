import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService) {}

  signUp() {
    return 'user added';
  }

  logIn(){
    return "user logged";
  }
}
