import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CountryModule } from 'src/country/country.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    CountryModule,
    JwtModule.register({ secret: 'secret' }),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UsersModule {}
