'use client';
import { TaskType } from '@/common/models/task';
import { createContext, useContext, useMemo, useState } from 'react';

type TaskProviderProps = {
  children: React.ReactNode;
};

type TaskContextProps = {
  task: TaskType | undefined;
  setTask: (task: TaskType) => void;
} & Omit<TaskProviderProps, 'children'>;

const TaskContext = createContext<TaskContextProps>(undefined!);

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [task, setTask] = useState<TaskType>();

  const values = useMemo(() => ({ task, setTask }), [task, setTask]);

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};
