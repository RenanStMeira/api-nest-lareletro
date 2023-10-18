import { Module } from '@nestjs/common';
import { AuthService } from '../Admin/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AdminService } from '../../module/admin/admin.service'; 
import { PrismaService } from '../../database/PrismaService';
import { LoginController } from '../Admin/auth.controller';
import { AdminModule } from '../../module/admin/admin.module';

@Module({
  controllers: [LoginController],
  imports: [AdminModule, PassportModule],
  providers: [AuthService, LocalStrategy, AdminService, PrismaService],
})
export class AuthModuleAdmin {}
