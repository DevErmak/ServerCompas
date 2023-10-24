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
import { CreateUserInput, GetUserAgrs } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { CountryEntity } from 'src/country/entities/country.entity';
import { CountryService } from 'src/country/country.service';
import { CreateCountryInput } from 'src/country/dto/create-country.input';
import { CurrentUser } from 'src/auth/currentuser.decorator';
import { AccessToken } from 'src/auth/dto/auth.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/auth.guard';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private countryService: CountryService,
  ) {}

  @Mutation((returns) => AccessToken, { nullable: true })
  async registerUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<{
    token: string;
  }> {
    return await this.userService.registerUser(createUserInput);
  }
  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUser') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => UserEntity)
  async getUser(@Args() args: GetUserAgrs): Promise<UserEntity> {
    if (args.id) return this.userService.findById(args.id);
    if (args.login) return this.userService.findByUsername(args.login);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => UserEntity)
  async getMe(@CurrentUser() UserEntity: UserEntity): Promise<UserEntity> {
    return await this.userService.findById(UserEntity.id);
  }

  //удалить
  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userService.getAllUser();
  }

  @UseGuards(GqlAuthGuard)
  @ResolveField('FavoriteCountry', (returns) => [CountryEntity])
  async getFavoriteCountries(@Parent() userEntity: UserEntity) {
    return this.countryService.findAll(userEntity.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => CountryEntity)
  async CreateFavoriteCountry(
    @Args('CreateFavoriteCountry') createCountryInput: CreateCountryInput,
  ): Promise<CountryEntity> {
    return await this.countryService.createCountry(createCountryInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => CountryEntity)
  async DeleteFavoriteCountry(
    @Args('DeleteFavoriteCountry') createCountryInput: CreateCountryInput,
  ): Promise<CountryEntity> {
    return await this.countryService.createCountry(createCountryInput);
  }

  // @ResolveField((returns) => UserEntity)
  // @Query((userEntity) => UserEntity)
  // async getFavoriteCountries(
  //   @Parent() countryEntity: CountryEntity,
  // ): Promise<CountryEntity[]> {
  //   return this.userService.getFavoriteCountries(countryEntity.userId);
  // }

  // @ResolveField((returns) => CountryEntity)
  // async getAllCountriesUser(
  //   @Parent() userEntity: UserEntity,
  // ): Promise<CountryEntity[]> {
  //   return this.userService.getAllCountriesUser(userEntity.id);
  // }
}
