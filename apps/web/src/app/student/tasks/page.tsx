import { TaskProvider } from './providers/task-provider';
import { TasksView } from './tasks.view';

export default function TasksPage() {
  return (
    <TaskProvider>
      <TasksView />
    </TaskProvider>
  );
}
