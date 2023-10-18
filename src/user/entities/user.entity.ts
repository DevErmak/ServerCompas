import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// @ObjectType()
// @Entity({ name: 'users' })
// export class User {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }
@ObjectType()
@Entity({ name: 'users' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
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
