import { Body, Controller, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../local-auth.guard';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('user')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    const result = await this.authService.login({email, password});
    if (result) {
      // Autenticação bem-sucedida, você pode enviar o token de acesso e os detalhes do usuário de volta para o cliente
      return result;
    } else {
      // Autenticação falhou, você pode retornar uma resposta de erro adequada
      throw new UnauthorizedException('Credenciais inválidas');
    }
  }
}


