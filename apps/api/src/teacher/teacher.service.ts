import { Injectable } from '@nestjs/common';
import { Prisma, Teacher } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async teacher(
    teacherWhereUniqueInput: Prisma.TeacherWhereUniqueInput,
  ): Promise<Teacher | null> {
    return this.prisma.teacher.findUnique({
      where: teacherWhereUniqueInput,
    });
  }

  async teachers(): Promise<Teacher[]> {
    return this.prisma.teacher.findMany({});
  }

  async createTeacher(data: Prisma.TeacherCreateInput): Promise<Teacher> {
    return this.prisma.teacher.create({
      data: data,
    });
  }

  async updateTeacher(params: {
    where: Prisma.TeacherWhereUniqueInput;
    data: Prisma.TeacherUpdateInput;
  }): Promise<Teacher> {
    const { where, data } = params;
    return this.prisma.teacher.update({
      data: data,
      where: where,
    });
  }

  async deleteTeacher(where: Prisma.TeacherWhereUniqueInput): Promise<Teacher> {
    return this.prisma.teacher.delete({
      where: where,
    });
  }
}
