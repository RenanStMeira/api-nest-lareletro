import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { AdminModule } from './module/admin/admin.module';
import { JobsModule } from './module/jobs/jobs.module';
import { SchedulingModule } from './module/scheduling/scheduling.module';

@Module({
  imports: [UserModule, AdminModule, JobsModule, SchedulingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
