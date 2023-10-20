import { Injectable } from '@nestjs/common';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';
import { CountryEntity } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/users.service';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>, // private userService: UserService,
  ) {}

  async createCountry(
    countryInput: CreateCountryInput,
  ): Promise<CountryEntity> {
    return await this.countryRepository.save({ ...countryInput });
  }
  async removeCountry(id: number): Promise<number> {
    await this.countryRepository.delete({ id });
    return id;
  }

  async getOneCountry(id: number): Promise<CountryEntity> {
    return await this.countryRepository.findOne({ where: { id } });
  }
  async getAllCountry(): Promise<CountryEntity[]> {
    return await this.countryRepository.find();
  }

  async getAllCountriesUser(userId: number): Promise<CountryEntity[]> {
    return await this.countryRepository.find({
      where: {
        userId: userId,
      },
    });
  }

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
