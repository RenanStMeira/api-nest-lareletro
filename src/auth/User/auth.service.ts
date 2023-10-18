import { Injectable } from '@nestjs/common';
import { UserService } from '../../module/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login({ email, password }: { email: string; password: string }): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && user.password === password) {
      const token = '';

      return {
        accessToken: token,
        user: user, 
      };
    }
    return null;
  }
}
