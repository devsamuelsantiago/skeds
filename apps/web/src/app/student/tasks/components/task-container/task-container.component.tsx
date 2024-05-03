'use client';
import { TaskType } from '@/common/models/task';
import { DialogTrigger } from '@/common/components/ui/dialog';
import { useTaskContext } from '../../providers/task-provider';

type TaskContainerProps = {
  tasks: TaskType[];
};

export function TaskContainer({ tasks }: TaskContainerProps) {
  const { setTask } = useTaskContext();

  return (
    <div className="flex flex-1 flex-col items-center justify-start w-full gap-4">
      {tasks.map((task, i) => {
        return (
          <DialogTrigger asChild key={i} onClick={() => setTask(task)}>
            <div className="w-full bg-accent p-4 rounded-md flex flex-col gap-1 cursor-pointer transition-transform hover:translate-x-3">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-center">
                  <h1 className="text-base font-medium">{task.title}</h1>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <p className="text-sm font-medium text-muted-foreground">Entrega:</p>
                  <h3 className="text-sm font-medium">{task.dueDate.toLocaleDateString()}</h3>
                </div>
              </div>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis text-sm text-muted-foreground">
                {task.content}
              </p>
            </div>
          </DialogTrigger>
        );
      })}
    </div>
  );
}
