import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { releases } from '@/test_api/releases';
import { Dialog } from '@/common/components/ui/dialog';
import { AssignContainer } from '@/common/components/assign-container/assign-container.component';
import { Popup } from '@/common/components/popup';

export function ReleasesView() {
  return (
    <main className="flex flex-1 flex-row p-3 gap-3 h-screen">
      <div className="bg-background rounded-md h-full">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-auto overflow-x-hidden">
        <Header />
        <div className="flex flex-1 justify-between flex-col gap-4 px-16 pb-16 w-full">
          <h1 className="text-3xl font-medium my-4">Comunicados</h1>
          <Dialog>
            <AssignContainer tasks={releases} />
            <Popup />
          </Dialog>
        </div>
      </div>
    </main>
  );
}
