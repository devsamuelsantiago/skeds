import { AssignProvider } from '@/common/providers/assign-provider';
import { TasksView } from './tasks.view';

export default function TasksPage() {
  return (
    <AssignProvider>
      <TasksView />
    </AssignProvider>
  );
}
