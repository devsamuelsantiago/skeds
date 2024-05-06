'use client';
import { createContext, useContext, useMemo, useState } from 'react';
import { TaskType } from '@/common/models/task';
import { EventType } from '@/common/models/event';
import { ReleaseType } from '@/common/models/realese';

type AssignProviderProps = {
  children: React.ReactNode;
};

type AssignContextProps = {
  assign: TaskType | EventType | ReleaseType | undefined;
  setAssign: (task: TaskType | EventType | ReleaseType) => void;
} & Omit<AssignProviderProps, 'children'>;

const AssignContext = createContext<AssignContextProps>(undefined!);

export const AssignProvider = ({ children }: AssignProviderProps) => {
  const [assign, setAssign] = useState<TaskType | EventType | ReleaseType>();

  const values = useMemo(() => ({ assign, setAssign }), [assign, setAssign]);

  return <AssignContext.Provider value={values}>{children}</AssignContext.Provider>;
};

export const useAssignContext = () => {
  const context = useContext(AssignContext);
  return context;
};
