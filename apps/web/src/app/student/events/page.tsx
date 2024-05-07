import { AssignProvider } from '@/common/providers/assign-provider';
import { EventsView } from './events.view';

export default function ReleasesPage() {
  return (
    <AssignProvider>
      <EventsView />
    </AssignProvider>
  );
}
