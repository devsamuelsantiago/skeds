import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { Task } from './components/task';
import { tasks } from '@/test_api/tasks';
import { Dialog, DialogTrigger } from '@/common/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs';
import { Popup } from './components/popup';

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
        <div className="flex flex-1 items-center justify-between flex-col gap-8 px-16 pb-16">
          <Dialog>
            <Tabs defaultValue="no-finished" className="w-full">
              <TabsList>
                <TabsTrigger value="no-finished">A fazer</TabsTrigger>
                <TabsTrigger value="finished">Concluídas</TabsTrigger>
              </TabsList>
              <TabsContent value="no-finished">
                <div className="flex flex-1 flex-col items-center justify-start w-full gap-4">
                  {noFinishedTasks.map((task, i) => {
                    return (
                      <DialogTrigger asChild key={i}>
                        <Task data={task} />
                      </DialogTrigger>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="finished">
                <div className="flex flex-1 flex-col items-center justify-start w-full gap-4">
                  {finishedTasks.map((task, i) => {
                    return (
                      <DialogTrigger asChild key={i}>
                        <Task data={task} />
                      </DialogTrigger>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
            <Popup />
          </Dialog>
        </div>
      </div>
    </main>
  );
}
