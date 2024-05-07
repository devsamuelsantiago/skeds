'use client';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/common/components/ui/dialog';
import { useAssignContext } from '../../providers/assign-provider';
import { Button } from '@/common/components/ui/button';

type PopupProps = {
  withoutButtons?: boolean;
};

export function Popup({ withoutButtons }: PopupProps) {
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
        {!withoutButtons && (
          <div
            className={`flex ${'filesUpload' in assign && assign.filesUpload === true ? 'justify-between' : 'justify-end'} items-center h-min`}
          >
            {'filesUpload' in assign && assign.filesUpload === true && (
              <Button variant="outline">Carregar arquivos</Button>
            )}
            <Button variant="default">
              {'filesUpload' in assign && assign.filesUpload === true ? 'Entregar tarefa' : 'Marcar como lido'}
            </Button>
          </div>
        )}
      </div>
    </DialogContent>
  ) : (
    <></>
  );
}
