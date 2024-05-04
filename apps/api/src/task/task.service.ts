import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
// import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  async create(createTaskDto: CreateTaskDto): Promise<Task | null> {
    return this.prisma.task.create({ data: createTaskDto });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async findOne(id: Prisma.TaskWhereUniqueInput): Promise<Task | null> {
    return this.prisma.task.findUnique({ where: id });
  }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  async remove(id: Prisma.TaskWhereUniqueInput): Promise<Task | null> {
    return this.prisma.task.delete({ where: id });
  }
}
