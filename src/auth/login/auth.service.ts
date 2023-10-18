import { Injectable } from '@nestjs/common';
import { UserService } from '../../module/user/user.service';
import { AuthModule } from './auth.module';

// AuthService
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login({ email, password }: { email: string; password: string }): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && user.password === password) {
      // Autenticação bem-sucedida - você pode gerar um token JWT ou qualquer outra lógica que desejar
      const token = 'seu-token-de-autenticacao';

      return {
        accessToken: token,
        user: user, // ou apenas os detalhes do usuário que deseja incluir na resposta
      };
    }

    // Se as credenciais não são válidas, você pode lançar uma exceção ou retornar null/undefined
    // Neste exemplo, retornamos null para indicar que a autenticação falhou
    return null;
  }
}
