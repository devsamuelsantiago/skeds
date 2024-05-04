import { Prisma } from '@prisma/client';

export class CreateTeacherDto {
  name: string;
  email: string;
  password: string;
  subjects: string[];
  createdTasks: Prisma.TaskCreateNestedManyWithoutTeacherInput;
  notifications: Prisma.NotificationCreateNestedManyWithoutTeacherInput;
}
