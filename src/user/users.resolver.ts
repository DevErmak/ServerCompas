import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UserService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CountryEntity } from 'src/country/entities/country.entity';
import { CountryService } from 'src/country/country.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) // private countryService: CountryService,
  {}

  // constructor(private readonly usersService: UsersService) {}
  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUser') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id);
  }

  @Query(() => UserEntity)
  async getOneUser(@Args('id') id: number): Promise<UserEntity> {
    return this.userService.getOneUser(id);
  }

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUser();
  }

  @ResolveField((returns) => CountryEntity)
  async getAllCountriesUser(
    @Parent() userEntity: UserEntity,
  ): Promise<CountryEntity[]> {
    return this.userService.getAllCountriesUser(userEntity.id);
  }
}
