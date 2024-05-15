'use client';
import { Header } from '@/common/components/header';
import { Sidebar } from '../components/sidebar';
import { useEffect, useState } from 'react';
import { Grid } from './components/grid';
import { Dialog } from '@radix-ui/react-dialog';
import { Popup } from './components/popup';
import { DialogTrigger } from '@/common/components/ui/dialog';
import { useUserContext } from '@/common/providers/user-provider';
import { onGrid } from '@/lib/firebase/grid';
import { GridType } from '@/common/models/organization';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs';
import Link from 'next/link';

export function GridsView() {
  const { user } = useUserContext();
  const [grids, setGrids] = useState<GridType>({ classes: {}, subjects: {} });
  const [open, setOpen] = useState(false);

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
              <TabsTrigger value="classes" className="min-w-28 w-[20%] data-[state=active]:bg-accent">
                Turmas
              </TabsTrigger>
              <TabsTrigger value="subjects" className="min-w-28 w-[20%] data-[state=active]:bg-accent">
                Disciplinas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="classes">
              <div className="flex justify-around gap-4 flex-wrap">
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Grid type="class" label="+" asAdd />
                  </DialogTrigger>
                  {user?.organizationUid?.uid && <Popup type="classes" organizationUid={user.organizationUid.uid} />}
                </Dialog>
                {grids?.classes &&
                  Object.keys(grids.classes).map((key) => (
                    <Link href={`/organization/grids/edit-grid?uid=${key}`} key={key} className="w-full">
                      <Grid type="class" label={grids.classes[key].name} />
                    </Link>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="subjects">
              <div className="flex justify-between gap-4 flex-wrap">
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Grid type="subject" label="+" asAdd />
                  </DialogTrigger>
                  {user?.organizationUid?.uid && <Popup type="subjects" organizationUid={user.organizationUid.uid} />}
                </Dialog>
                {grids?.subjects &&
                  Object.keys(grids.subjects).map((key) => (
                    <Link href={`/organization/grids/edit-grid?uid=${key}`} key={key} className="w-full">
                      <Grid key={key} type="subject" label={grids.subjects[key].name} />
                    </Link>
                  ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
