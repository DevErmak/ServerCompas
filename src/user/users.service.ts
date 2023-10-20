import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CountryService } from 'src/country/country.service';
import { CountryEntity } from 'src/country/entities/country.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private countryService: CountryService,
  ) {}

  async createUser(userInput: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save({ ...userInput });
  }
  async getOneUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { id } });
  }
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }
  async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    await this.userRepository.update(
      { id: updateUserInput.id },
      { ...updateUserInput },
    );
    return await this.getOneUser(updateUserInput.id);
  }
  async getAllCountriesUser(userId: number): Promise<CountryEntity[]> {
    return await this.countryService.getAllCountriesUser(userId);
  }

  // async findAll() {
  //   return await this.repository.find();
  // }
  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
