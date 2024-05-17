'use client';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '@/common/components/header';
import { ClassType, GridType, SubjectType } from '@/common/models/organization';
import { useUserContext } from '@/common/providers/user-provider';
import { useRouter, useSearchParams } from 'next/navigation';
import { onGrid, updateGrid, deleteGrid } from '@/lib/firebase/grid';
import { Combobox } from '@/common/components/combobox';
import { Cross1Icon, CrossCircledIcon, PlusIcon } from '@radix-ui/react-icons';
import { Button } from '@/common/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/common/components/ui/dialog';

export function EditGridView() {
  const { user } = useUserContext();
  const router = useRouter();
  const params = useSearchParams();
  const [grid, setGrid] = useState<ClassType>();
  const [subjects, setSubjects] = useState<Record<string, SubjectType>>();
  const [equipedSubjects, setEquipedSubjects] = useState<Record<string, SubjectType>>();
  const [value, setValue] = useState<string>('');
  const [actualSubject, setActualSubject] = useState<string>('');

  const getGrid = useCallback(
    (grids: GridType) => {
      const gridUid = params.get('uid');
      if (!gridUid) return;
      const grid = grids?.classes?.[gridUid];
      setSubjects(grids.subjects);
      setEquipedSubjects(grid?.subjects);
      setGrid(grid);
    },
    [params],
  );

  const excludeGrid = useCallback(
    (toExcludeGridUid: string) => {
      if (!user?.organizationUid?.uid) return;
      const gridUid = params.get('uid');
      if (!gridUid) return;
      const newEquipedSubjects = { ...equipedSubjects };
      delete newEquipedSubjects[toExcludeGridUid];
      updateGrid({
        organizationUid: user.organizationUid.uid,
        gridUid: gridUid,
        type: 'classes',
        data: { ...grid, subjects: newEquipedSubjects },
      });
    },
    [grid, equipedSubjects, user],
  );

  useEffect(() => {
    if (user?.organizationUid?.uid) {
      onGrid({ organizationUid: user?.organizationUid?.uid, callback: (grids) => getGrid(grids) });
    }
  }, [user, getGrid]);

  useEffect(() => {
    if (value && user?.organizationUid?.uid) {
      const gridUid = params.get('uid');
      if (!gridUid) return;
      const newEquipedSubjects = { ...equipedSubjects, [value]: subjects?.[value] };
      updateGrid({
        organizationUid: user.organizationUid.uid,
        gridUid: gridUid,
        type: 'classes',
        data: { ...grid, subjects: newEquipedSubjects },
      });
      setValue('');
    }
  }, [value, subjects, user, equipedSubjects, params, grid]);

  return (
    <main className="flex flex-1 flex-row md:p-3 gap-3 h-screen">
      <div className="flex flex-1 flex-col justify-between bg-background rounded-md overflow-auto overflow-x-hidden px-4 md:px-16 py-16 relative gap-8">
        <Header />
        <h1 className="text-2xl font-normal text-center">{grid?.name}</h1>
        <div className="flex flex-col gap-4 p-2">
          <h3 className="text-xl font-medium">Disciplinas</h3>
          <Combobox
            options={Object.entries(subjects || {}).map(([key, value]) => ({ value: key, label: value.name }))}
            value={value}
            placeholder="Adicionar disciplina"
            setValue={setValue}
            icon={<PlusIcon />}
            className="py-6 rounded-md bg-card border-dashed text-muted-foreground"
          />
          <div className="min-h-64 w-full flex flex-col gap-4">
            <Dialog>
              {Object.entries(equipedSubjects || {}).map(([key]) => (
                <DialogTrigger key={key} onClick={() => setActualSubject(key)}>
                  <div className="cursor-pointer bg-card p-4 rounded-md transition-transform hover:translate-x-2 hover:outline hover:outline-destructive outline-1 flex justify-between items-center">
                    {equipedSubjects?.[key].name}
                    <div className="text-destructive">
                      <Cross1Icon className="cursor-pointer" />
                    </div>
                  </div>
                </DialogTrigger>
              ))}
              <DialogContent className="w-[90%] rounded-md">
                <DialogHeader>
                  <DialogTitle>Tem certeza que deseja remover a disciplina desta classe?</DialogTitle>
                </DialogHeader>
                <div className="flex justify-end gap-4">
                  <DialogClose>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <DialogClose onClick={() => excludeGrid(actualSubject)}>
                    <Button variant="destructive">Remover</Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="p-2">
          <Dialog>
            <DialogTrigger>
              <Button variant="destructive-outline">Excluir classe</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tem certeza que deseja excluir a classe?</DialogTitle>
              </DialogHeader>
              <DialogDescription>Essa ação não pode ser desfeita.</DialogDescription>
              <div className="flex justify-end gap-4">
                <DialogClose>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>
                <DialogClose
                  onClick={() => {
                    user?.organizationUid?.uid &&
                      deleteGrid({
                        organizationUid: user.organizationUid.uid,
                        gridUid: params.get('uid') as string,
                        type: 'classes',
                      });
                    router.push('/organization/grids');
                  }}
                >
                  <Button variant="destructive">Excluir</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
