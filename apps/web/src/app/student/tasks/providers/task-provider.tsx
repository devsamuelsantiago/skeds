'use client';
import { createContext, useContext, useMemo, useState } from 'react';

type TaskProviderProps = {
  children: React.ReactNode;
};

type TaskContextProps = {
  taskId: string | undefined;
  setTaskId: (id: string) => void;
} & Omit<TaskProviderProps, 'children'>;

const TaskContext = createContext<TaskContextProps>(undefined!);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [taskId, setTaskId] = useState<string>();

  const values = useMemo(() => ({ taskId, setTaskId }), [taskId, setTaskId]);

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};
