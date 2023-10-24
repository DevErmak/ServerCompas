import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(login: string, password: string) {
    const user = await this.usersService.findByUsername(login);

    if (!user) throw new Error('User not found');

    if (user.password !== password) throw new Error('Invalid credentials');

    return {
      token: this.jwtService.sign({
        userId: user.id,
        username: user.login,
      }),
    };
  }
}
