import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsEmail, Matches, Min, MinLength } from 'class-validator';
import { CountryEntity } from 'src/country/entities/country.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'user' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToMany(() => CountryEntity, (country) => country.user, {
  //   onDelete: 'CASCADE',
  // })
  // @Field((type) => [CountryEntity], { nullable: true })
  // countries: CountryEntity[];

  // @IsEmail()
  @Field()
  @Column()
  login: string;

  // @MinLength(6, {
  //   message: 'Password is too short',
  // })
  // @Matches(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*).+$'), {
  //   message:
  //     'the password must contain at least 6 characters and have at least one capital letter and number',
  // })
  @Field()
  @Column()
  password: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
  @Field()
  @UpdateDateColumn()
  updateAt: Date;
}
