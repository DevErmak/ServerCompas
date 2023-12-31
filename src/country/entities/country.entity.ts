import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'country' })
export class CountryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => ID)
  userId: number;

  // @ManyToOne(() => UserEntity, (user) => user.countries, {
  //   eager: true,
  // })
  // @Field(() => UserEntity)
  // user: UserEntity;

  @Field()
  @Column()
  nameCountry: string;
  @Field()
  @Column()
  nameCapital: string;
  @Field()
  @Column()
  currencies: string;
  @Field()
  @Column()
  region: string;
  @Field()
  @Column()
  languages: string;
  @Field()
  @Column()
  population: string;
  @Field()
  @Column()
  flags: string;
  @Field({ nullable: true })
  @Column()
  flagsAlt: string;
  @Field()
  @Column()
  coatOfArms: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
  @Field()
  @UpdateDateColumn()
  updateAt: Date;
}
