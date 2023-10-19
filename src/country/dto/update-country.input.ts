import { CreateCountryInput } from './create-country.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCountryInput extends PartialType(CreateCountryInput) {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  nameCountry: string;
  @Field({ nullable: true })
  nameCapital: string;
  @Field({ nullable: true })
  currencies: string;
  @Field({ nullable: true })
  region: string;
  @Field({ nullable: true })
  languages: string;
  @Field({ nullable: true })
  population: string;
  @Field({ nullable: true })
  flags: string;
  @Field({ nullable: true })
  flagsAlt: string;
  @Field({ nullable: true })
  coatOfArms: string;
}
