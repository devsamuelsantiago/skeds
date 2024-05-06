import { AssignType } from './assign';

export type EventType = {
  dueDate: Date;
  endDate: Date;
} & AssignType;
