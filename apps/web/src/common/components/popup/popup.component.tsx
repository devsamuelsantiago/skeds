'use client';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/common/components/ui/dialog';
import { useAssignContext } from '../../providers/assign-provider';
import { Button } from '@/common/components/ui/button';

export function Popup() {
  const { assign } = useAssignContext();

  return assign ? (
    <DialogContent className="max-w-[80%] min-h-[50%]">
      <div className="flex flex-col justify-between p-2">
        <div className="flex flex-1 w-full flex-col gap-4">
          <DialogHeader>
            <DialogTitle>{assign.title}</DialogTitle>
          </DialogHeader>
          {'dueDate' in assign && (
            <p className="flex items-center gap-1 text-sm">
              Data de entrega:
              <DialogDescription>{new Date(assign.dueDate).toLocaleDateString()}</DialogDescription>
            </p>
          )}
          <DialogDescription>{assign?.content}</DialogDescription>
        </div>
        <div className={`flex ${'dueDate' in assign ? 'justify-between' : 'justify-end'} items-center h-min`}>
          {'dueDate' in assign && <Button variant="outline">Carregar arquivos</Button>}
          {'dueDate' in assign ? (
            <Button variant="default">Entregar</Button>
          ) : (
            <Button variant="default">Marcar como lido</Button>
          )}
        </div>
      </div>
    </DialogContent>
  ) : (
    <></>
  );
}
