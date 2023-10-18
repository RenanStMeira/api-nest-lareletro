import { Injectable } from '@nestjs/common';
import { AdminService } from '../../module/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(private readonly adminService: AdminService) {}

  async login({ email, password }: { email: string; password: string }): Promise<any> {
    const user = await this.adminService.findByEmail(email);

    if (user && user.password === password) {
      const token = 'seu-token-de-autenticacao';

      return {
        accessToken: token,
        user: user, 
      };
    }
    return null;
  }
}
