import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CountryEntity } from './entities/country.entity';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { UserEntity } from 'src/user/entities/user.entity';

@Resolver(() => CountryEntity)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  // constructor(private readonly usersService: UsersService) {}
  // @Mutation(() => CountryEntity)
  // async createCountry(
  //   @Args('createCountry') createCountryInput: CreateCountryInput,
  // ): Promise<CountryEntity> {
  //   return await this.countryService.createCountry(createCountryInput);
  // }

  // @Mutation(() => CountryEntity)
  // async updateCountry(
  //   @Args('updateCountry') updateCountryInput: UpdateCountryInput,
  // ): Promise<CountryEntity> {
  //   return await this.countryService.updateCountry(updateCountryInput);
  // }

  // @Mutation(() => Number)
  // async removeCountry(@Args('id') id: number): Promise<number> {
  //   return await this.countryService.removeCountry(id);
  // }

  // @Query(() => CountryEntity)
  // async getOneCountry(@Args('id') id: number): Promise<CountryEntity> {
  //   return this.countryService.getOneCountry(id);
  // }

  // @Query(() => [CountryEntity])
  // async getAllCountry(): Promise<CountryEntity[]> {
  //   return this.countryService.getAllCountry();
  // }
}
