import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PingController } from './ping/ping.controller';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { TeacherService } from './teacher/teacher.service';
import { OrganizationService } from './organization/organization.service';
import { UserController } from './user/user.controller';
import { TemplateModule } from './template/template.module';
import { OrganizationController } from './organization/organization.controller';
import { TeacherController } from './teacher/teacher.controller';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';

@Module({
  imports: [TemplateModule],
  controllers: [
    AppController,
    PingController,
    UserController,
    OrganizationController,
    TeacherController,
    TaskController,
  ],
  providers: [
    PrismaService,
    UserService,
    TeacherService,
    OrganizationService,
    TaskService,
  ],
})
export class AppModule {}
