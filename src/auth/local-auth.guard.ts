import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    // Adicione lógica personalizada aqui, se necessário, antes de chamar o super.canActivate()
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // Erro de autenticação
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    // Usuário autenticado com sucesso, 'user' será injetado no corpo da solicitação
    return user;
  }
}
