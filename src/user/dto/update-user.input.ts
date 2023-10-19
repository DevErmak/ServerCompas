import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  id: number;
  @Field({ nullable: true })
  login: string;
  @Field({ nullable: true })
  password: string;
}
