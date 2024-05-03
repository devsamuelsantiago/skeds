import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { tasks } from '@/test_api/tasks';
import { Dialog } from '@/common/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs';
import { Popup } from './components/popup';
import { TaskContainer } from './components/task-container/task-container.component';

export function TasksView() {
  const finishedTasks = tasks.filter((task) => task.finished);
  const noFinishedTasks = tasks.filter((task) => !task.finished);

  return (
    <main className="flex flex-1 flex-row p-3 gap-3 h-screen">
      <div className="bg-background rounded-md h-full">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-auto overflow-x-hidden">
        <Header />
        <Tabs defaultValue="no-finished" className="w-full">
          <div className="flex flex-1 justify-between flex-col gap-4 px-16 pb-16 w-full">
            <TabsList className="bg-transparent gap-1">
              <TabsTrigger value="no-finished" className="w-[20%] data-[state=active]:bg-accent">
                A fazer
              </TabsTrigger>
              <TabsTrigger value="finished" className="w-[20%] data-[state=active]:bg-accent">
                Concluídas
              </TabsTrigger>
            </TabsList>
            <Dialog>
              <TabsContent value="no-finished">
                <TaskContainer tasks={noFinishedTasks} />
              </TabsContent>
              <TabsContent value="finished">
                <TaskContainer tasks={finishedTasks} />
              </TabsContent>
              <Popup />
            </Dialog>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
