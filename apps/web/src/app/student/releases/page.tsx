import { AssignProvider } from '@/common/providers/assign-provider';
import { ReleasesView } from './releases.view';

export default function ReleasesPage() {
  return (
    <AssignProvider>
      <ReleasesView />
    </AssignProvider>
  );
}
