import { ObjectType, Field, ID } from '@nestjs/graphql';
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

  @OneToMany(() => CountryEntity, (country) => country.user, {
    onDelete: 'CASCADE',
  })
  @Field(() => [CountryEntity], { nullable: true })
  countries: CountryEntity[];

  @Field()
  @Column()
  login: string;

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
