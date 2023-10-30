// import { InputType, Int, Field } from '@nestjs/graphql';
import { InputType, Field, ArgsType, ObjectType } from '@nestjs/graphql';
import { IsEmail, Matches, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  @IsEmail()
  @Field()
  login: string;

  @MinLength(6, {
    message: 'Password is too short',
  })
  @Matches(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*).+$'), {
    message:
      'the password must contain at least 6 characters and have at least one capital letter and number',
  })
  @Field()
  password: string;
}

@ArgsType()
export class GetUserAgrs {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  login?: string;
}

// @ObjectType()
// export class userResponseGetMe {
//   @Field()
//   id: number;
//   @Field()
//   login: string;
// }
