export type AssignType = {
  id: string;
  title: string;
  creator: string;
  createdAt: Date;
  groups: string[];
  files: File[];
  viewed: boolean;
  content: string;
};
