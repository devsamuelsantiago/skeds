import { AssignType } from './assign';

export type TaskType = {
  tags: string[];
  dueDate: Date;
  finished: boolean;
} & AssignType;
