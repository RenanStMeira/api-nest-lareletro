import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('user')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    const result = await this.authService.login({ email, password });
    if (result) {
      return result;
    } else {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}
