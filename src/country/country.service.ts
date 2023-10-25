import { Injectable } from '@nestjs/common';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { CountryEntity } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/users.service';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>, // private userService: UserService,
  ) {}

  async createCountry(
    userID: number,
    countryInput: CreateCountryInput,
  ): Promise<CountryEntity> {
    return await this.countryRepository.save({
      userId: userID,
      ...countryInput,
    });
  }

  async removeCountry(userId: number, nameCountry: string): Promise<number> {
    await this.countryRepository.delete({
      userId: userId,
      nameCountry: nameCountry,
    });
    return userId;
  }

  async getOneCountry(id: number): Promise<CountryEntity> {
    return await this.countryRepository.findOne({ where: { id } });
  }
  async getAllCountry(): Promise<CountryEntity[]> {
    return await this.countryRepository.find();
  }

  async findAll(userId: number): Promise<CountryEntity[]> {
    const countries = await this.countryRepository.find({
      where: { userId: userId },
    });
    console.log('---------------->countries', countries);
    return countries?.length > 0 ? countries : [];
  }

  // async getAllCountriesUser(userId: number): Promise<CountryEntity[]> {
  //   return await this.countryRepository.find({
  //     where: {
  //       user: userId,
  //     },
  //   });
  // }

  // 111111111
  // async getFavoriteCountries(userId: number): Promise<CountryEntity[]> {
  //   return await this.countryRepository.find({
  //     where: {
  //       userId: userId,
  //     },
  //   });
  // }

  async updateCountry(
    updateCountryInput: UpdateCountryInput,
  ): Promise<CountryEntity> {
    await this.countryRepository.update(
      { id: updateCountryInput.id },
      { ...updateCountryInput },
    );
    return await this.getOneCountry(updateCountryInput.id);
  }
}
