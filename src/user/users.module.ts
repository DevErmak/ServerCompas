import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([User])],
//   providers: [UsersResolver, UsersService],
// })

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserResolver, UserService],
})
export class UsersModule {}
