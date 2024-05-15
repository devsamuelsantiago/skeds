'use client';
import { DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/common/components/ui/dialog';
import { Button } from '@/common/components/ui/button';
import { Form } from '@/common/components/form/form-provider';
import { Input } from '@/common/components/form/input';
import { createGrid } from '@/lib/firebase/grid';

type PopupProps = {
  organizationUid: string;
  type: 'classes' | 'subjects';
};

export function Popup({ type, organizationUid }: PopupProps) {
  const onSubmit = (values: Record<string, unknown>) => {
    createGrid({ organizationUid: organizationUid, type: type, name: values.name as string });
  };

  return (
    <DialogContent className="max-w-[90%] sm:max-w-[60%] rounded-lg">
      <div className="flex flex-col justify-between p-2">
        <div className="flex flex-1 w-full flex-col gap-6">
          <DialogHeader>
            <DialogTitle>Adicionar {type === 'classes' ? 'turma' : 'disciplina'}</DialogTitle>
          </DialogHeader>
          <Form onSubmit={onSubmit} className="flex flex-col gap-4">
            <Input
              name="name"
              placeholder={`Nome da nova ${type === 'classes' ? 'turma' : 'disciplina'}`}
              validation={['required']}
            />
            <div className="flex justify-center sm:justify-end">
              <DialogClose asChild>
                <Button type="submit" variant="default" className="min-w-32">
                  Criar
                </Button>
              </DialogClose>
            </div>
          </Form>
        </div>
      </div>
    </DialogContent>
  );
}
