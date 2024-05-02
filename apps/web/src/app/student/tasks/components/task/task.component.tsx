import { Checkbox } from '@/common/components/ui/checkbox';
import { TaskType } from '@/common/models/task';

type TaskProps = {
  data: TaskType;
};

export function Task({ data }: TaskProps) {
  const { title, content, dueDate } = data;
  return (
    <div className="w-full bg-accent p-4 rounded-md flex flex-col gap-1 cursor-pointer transition-transform hover:translate-x-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="text-base font-medium">{title}</h1>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <p className="text-sm font-medium text-muted-foreground">Entrega:</p>
          <h3 className="text-sm font-medium">{dueDate.toLocaleDateString()}</h3>
        </div>
      </div>
      <p className="whitespace-nowrap overflow-hidden text-ellipsis text-sm text-muted-foreground">{content}</p>
    </div>
  );
}
