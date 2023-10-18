import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { AdminModule } from './module/admin/admin.module';
import { JobsModule } from './module/jobs/jobs.module';
import { SchedulingModule } from './module/scheduling/scheduling.module';
// import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/login/auth.module';
import { LoginController } from './auth/login/auth.controller';

@Module({
  imports: [UserModule, AdminModule, JobsModule, SchedulingModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
