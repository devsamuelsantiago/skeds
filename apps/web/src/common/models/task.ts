import { AssignType } from './assign';

export type TaskType = {
  tags: string[];
  filesUpload: boolean;
  dueDate: Date;
  finished: boolean;
} & AssignType;
