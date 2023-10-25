import { InputType, Field, ID, ArgsType } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  // @Field(() => ID)
  // userId: number;

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

// @ArgsType()
// export class GetCountryAgrs {
//   @Field(() => ID, { nullable: true })
//   userId: number;

//   @Field()
//   nameCountry: string;
//   // @Field({ nullable: true })
//   // nameCapital: string;
//   // @Field({ nullable: true })
//   // currencies: string;
//   // @Field({ nullable: true })
//   // region: string;
//   // @Field({ nullable: true })
//   // languages: string;
//   // @Field({ nullable: true })
//   // population: string;
//   // @Field({ nullable: true })
//   // flags: string;
//   // @Field({ nullable: true })
//   // flagsAlt: string;
//   // @Field({ nullable: true })
//   // coatOfArms: string;
// }
