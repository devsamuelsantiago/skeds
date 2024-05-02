import { AssignType } from './assign';

export type TaskType = {
  tags: string[];
  finished: boolean;
} & AssignType;
