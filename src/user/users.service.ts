import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { FastifyReply } from 'fastify';
import { AccessToken } from 'src/auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async registerUser(userInput: CreateUserInput): Promise<AccessToken> {
    const user = await this.findByUsername(userInput.login);

    if (user) throw new Error('User has been registered');

    await this.userRepository.save({ ...userInput });
    const registerUser = await this.findByUsername(userInput.login);
    return {
      token: this.jwtService.sign({
        userId: registerUser.id,
        username: registerUser.login,
      }),
    };
  }
  async findById(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({
      where: { id },
      loadEagerRelations: true,
    });
  }
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }
  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }
  // async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
  //   await this.userRepository.update(
  //     { id: updateUserInput.id },
  //     { ...updateUserInput },
  //   );
  //   return await this.findById(updateUserInput.id);
  // }

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { login: username } });
  }
  // 111111111111
  // async getFavoriteCountries(id: number): Promise<CountryEntity[]> {
  //   return await this.countryService.getFavoriteCountries(id);
  // }

  // async getAllCountriesUser(userId: number): Promise<CountryEntity[]> {
  //   return await this.countryService.getAllCountriesUser(userId);
  // }

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
