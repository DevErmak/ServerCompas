import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AccessToken, LoginArgs } from './dto/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => AccessToken, { nullable: true })
  async login(@Args() args: LoginArgs) {
    const token = await this.authService.login(args.login, args.password);
    return token;
  }
}
