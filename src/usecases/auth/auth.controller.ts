import { Public } from './decorator';
import { LoginRequestBody } from './models';
import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';


@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Public()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  login(@Body() { email, password }: LoginRequestBody) {
    return this.authService.signIn(email, password);
  }
}