// import { InputType, Int, Field } from '@nestjs/graphql';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  @Field(() => String)
  name: string;
}
