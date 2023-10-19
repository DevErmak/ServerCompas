// import { InputType, Int, Field } from '@nestjs/graphql';
import { InputType, Field } from '@nestjs/graphql';
import { CountryEntity } from 'src/country/entities/country.entity';

@InputType()
export class CreateUserInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  @Field()
  login: string;
  @Field()
  password: string;
}
