export type AssignType = {
  id: number;
  title: string;
  creator: string;
  dueDate: Date;
  createdAt: Date;
  groups: string[];
  files: File[];
  content: string;
};
