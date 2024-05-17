'use client';
import { Header } from '@/common/components/header';
import { Sidebar } from '../components/sidebar';
import { useEffect, useState } from 'react';
import { Grid } from './components/grid';
import { Dialog } from '@radix-ui/react-dialog';
import { Popup } from './components/popup';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/common/components/ui/dialog';
import { useUserContext } from '@/common/providers/user-provider';
import { onGrid, deleteGrid } from '@/lib/firebase/grid';
import { GridType } from '@/common/models/organization';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Button } from '@/common/components/ui/button';

export function GridsView() {
  const { user } = useUserContext();
  const [grids, setGrids] = useState<GridType>({ classes: {}, subjects: {} });
  const [open, setOpen] = useState(false);
  const [selectedGrid, setSelectedGrid] = useState<string>('');

  useEffect(() => {
    if (user?.organizationUid?.uid) {
      onGrid({ organizationUid: user?.organizationUid?.uid, callback: (grids) => setGrids(grids) });
    }
  }, [user]);

  return (
    <main className="flex flex-1 flex-row md:p-3 gap-3 h-screen">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-auto overflow-x-hidden px-4 md:px-16 py-16 relative">
        <Header withoutBack sidebarOpen={() => setOpen(true)} />
        <Tabs defaultValue="classes" className="w-full">
          <div className="flex flex-1 justify-between flex-col gap-4 w-full md:px-16">
            <h1 className="text-2xl font-normal text-center">Grades</h1>
            <TabsList className="bg-transparent gap-1">
              <TabsTrigger value="classes" className="min-w-28 w-[20%]">
                Turmas
              </TabsTrigger>
              <TabsTrigger value="subjects" className="min-w-28 w-[20%]">
                Disciplinas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="classes">
              <div className="flex justify-around gap-4 flex-wrap">
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Grid label="+" asAdd />
                  </DialogTrigger>
                  {user?.organizationUid?.uid && <Popup type="classes" organizationUid={user.organizationUid.uid} />}
                </Dialog>
                {grids?.classes &&
                  Object.keys(grids.classes).map((key) => (
                    <Link href={`/organization/grids/edit-grid?uid=${key}`} key={key} className="w-full">
                      <Grid label={grids.classes[key].name} icon={<Pencil1Icon />} />
                    </Link>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="subjects">
              <div className="flex justify-between gap-4 flex-wrap">
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Grid label="+" asAdd />
                  </DialogTrigger>
                  {user?.organizationUid?.uid && <Popup type="subjects" organizationUid={user.organizationUid.uid} />}
                </Dialog>
                <Dialog>
                  {grids?.subjects &&
                    Object.keys(grids.subjects).map((key) => (
                      <DialogTrigger key={key} className="w-full" onClick={() => setSelectedGrid(key)}>
                        <Grid
                          className="w-full transition-all cursor-pointer hover:outline-destructive hover:outline outline-1 rounded-md"
                          label={grids.subjects[key].name}
                          icon={<TrashIcon className="text-destructive" />}
                        />
                      </DialogTrigger>
                    ))}
                  <DialogContent className="w-[90%] rounded-md">
                    <DialogHeader>
                      <DialogTitle>Tem certeza que deseja excluir esta disciplina?</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>Essa ação não pode ser desfeita.</DialogDescription>
                    <div className="flex justify-end gap-4">
                      <DialogClose>
                        <Button variant="outline">Cancelar</Button>
                      </DialogClose>
                      <DialogClose
                        onClick={() =>
                          user?.organizationUid?.uid &&
                          deleteGrid({
                            organizationUid: user.organizationUid.uid,
                            gridUid: selectedGrid,
                            type: 'subjects',
                          })
                        }
                      >
                        <Button variant="destructive">Excluir</Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
