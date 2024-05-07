export class CreateTaskDto {
  title: string;
  description: string;
  content: string;
  dueDate: Date;
  status: string;
  classId: string;
  teacherId: string;
}
