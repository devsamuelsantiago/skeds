import { Prisma } from '@prisma/client';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  Class: Prisma.ClassCreateNestedOneWithoutStudentsInput;
  Organization: Prisma.OrganizationCreateNestedOneWithoutStudentsInput;
}
