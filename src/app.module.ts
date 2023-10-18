import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { AdminModule } from './module/admin/admin.module';
import { JobsModule } from './module/jobs/jobs.module';
import { SchedulingModule } from './module/scheduling/scheduling.module';
import { AuthModuleAdmin } from './auth/Admin/auth.module';
import { AuthModule } from './auth/User/auth.module'

@Module({
  imports: [
    UserModule,
    AdminModule,
    JobsModule,
    SchedulingModule,
    AuthModule,
    AuthModuleAdmin,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
