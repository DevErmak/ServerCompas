import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  @Field(() => ID)
  userId: number;

  @Field()
  nameCountry: string;
  @Field()
  nameCapital: string;
  @Field()
  currencies: string;
  @Field()
  region: string;
  @Field()
  languages: string;
  @Field()
  population: string;
  @Field()
  flags: string;
  @Field()
  flagsAlt: string;
  @Field()
  coatOfArms: string;
}
