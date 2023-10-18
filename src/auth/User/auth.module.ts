import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../../module/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../../module/user/user.service';
import { PrismaService } from '../../database/PrismaService';
import { LoginController } from './auth.controller';

@Module({
  controllers: [LoginController],
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy, UserService, PrismaService],
})
export class AuthModule {}
