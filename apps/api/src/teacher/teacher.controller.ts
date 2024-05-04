import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get('all')
  getTeacher() {
    return this.teacherService.teachers();
  }

  @Get(':id')
  getTeacherById(@Param('id') id: string) {
    return this.teacherService.teacher({ id: id });
  }

  @Post('')
  createTeacher(@Body() createTeacher: CreateTeacherDto) {
    return this.teacherService.createTeacher(createTeacher);
  }

  @Delete(':id')
  deleteTeacher(@Param('id') id: string) {
    return this.teacherService.deleteTeacher({ id: id });
  }
}
