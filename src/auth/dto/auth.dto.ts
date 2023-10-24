import { ArgsType, Field, ObjectType } from '@nestjs/graphql';

@ArgsType()
export class LoginArgs {
  @Field()
  login: string;

  @Field()
  password: string;
}

@ObjectType()
export class AccessToken {
  @Field()
  token: string;
}
