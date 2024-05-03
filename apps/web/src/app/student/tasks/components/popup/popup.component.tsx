'use client';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/common/components/ui/dialog';
import { useTaskContext } from '../../providers/task-provider';
import { Button } from '@/common/components/ui/button';

export function Popup() {
  const { task } = useTaskContext();

  return task ? (
    <DialogContent className="max-w-[80%]">
      <DialogHeader>
        <DialogTitle>{task?.title}</DialogTitle>
      </DialogHeader>
      <p className="flex items-center gap-1 text-sm">
        Data de entrega:
        <DialogDescription>{new Date(task?.dueDate).toLocaleDateString()}</DialogDescription>
      </p>
      <DialogDescription>{task?.content}</DialogDescription>
      <div className="flex justify-between items-center">
        <Button variant="outline">Carregar arquivos</Button>
        <Button variant="default">Finalizar e enviar</Button>
      </div>
    </DialogContent>
  ) : (
    <></>
  );
}
