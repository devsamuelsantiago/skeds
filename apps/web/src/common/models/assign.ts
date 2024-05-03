export type AssignType = {
  id: string;
  title: string;
  creator: string;
  dueDate: Date;
  createdAt: Date;
  groups: string[];
  files: File[];
  content: string;
};
