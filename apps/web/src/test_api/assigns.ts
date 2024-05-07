import { EventType } from '@/common/models/event';
import { TaskType } from '@/common/models/task';
import { ReleaseType } from '@/common/models/realese';
import { events } from './events';
import { tasks } from './tasks';
import { releases } from './releases';

export const assigns: (EventType | TaskType | ReleaseType)[] = [...events, ...tasks, ...releases];
