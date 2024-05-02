import { EventType } from '@/common/models/event';
import { TaskType } from '@/common/models/task';
import { events } from './events';
import { tasks } from './tasks';

export const assigns: (EventType | TaskType)[] = [...events, ...tasks];
