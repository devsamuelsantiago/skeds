'use client';
import { HelloCard } from '@/common/components/hello-card/popup.component';
import { Sidebar } from './components/sidebar';
import { Header } from '@/common/components/header';
import { useState } from 'react';

export function OrganizationView() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-1 flex-row p-3 gap-3 h-screen">
      <div className="bg-background rounded-md h-full">
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-auto overflow-x-hidden px-16 py-16 relative">
        <Header withoutBack sidebarOpen={() => setOpen(true)} />
        <HelloCard />
      </div>
    </main>
  );
}
