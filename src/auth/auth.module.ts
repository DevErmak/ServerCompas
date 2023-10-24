import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { GqlAuthGuard } from './auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/user/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({ secret: 'secret' }),
  ],
  providers: [AuthService, AuthResolver, GqlAuthGuard, JwtStrategy],
})
export class AuthModule {}
