'use client';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '@/common/components/header';
import { ClassType, GridType } from '@/common/models/organization';
import { useUserContext } from '@/common/providers/user-provider';
import { useSearchParams } from 'next/navigation';
import { onGrid } from '@/lib/firebase/grid';

export function EditGridView() {
  const { user } = useUserContext();
  const params = useSearchParams();
  const [grid, setGrid] = useState<ClassType>();

  const getGrid = useCallback(
    (grids: GridType) => {
      const gridUid = params.get('uid');
      if (!gridUid) return;
      const grid = grids.classes[gridUid];
      setGrid(grid);
    },
    [params],
  );

  useEffect(() => {
    if (user?.organizationUid?.uid) {
      onGrid({ organizationUid: user?.organizationUid?.uid, callback: (grids) => getGrid(grids) });
    }
  }, [user, getGrid]);

  return (
    <main className="flex flex-1 flex-row md:p-3 gap-3 h-screen">
      <div className="flex flex-1 flex-col bg-background rounded-md overflow-auto overflow-x-hidden px-4 md:px-16 py-16 relative">
        <Header />
        <h1>{grid?.name}</h1>
      </div>
    </main>
  );
}
