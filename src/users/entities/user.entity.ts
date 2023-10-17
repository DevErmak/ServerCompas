import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
// export class User {
//   @Field(() => Int, { description: 'Example field (placeholder)' })
//   exampleField: number;
// }
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;
  @Field(() => String)
  @Column()
  name: string;
}
