'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { User } from '@/common/models/user';
import { getDatabaseUser } from '@/lib/firebase/user';

type UserProviderProps = {
  children: React.ReactNode;
};

type UserContextProps = {
  user: User | undefined;
  logout: () => void;
} & Omit<UserProviderProps, 'children'>;

const UserContext = createContext<UserContextProps>(undefined!);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDatabaseUser(user.uid).then((data) => {
          if (data) {
            setUser({ ...user, ...data });
            return;
          }
          setUser(user);
        });
      }
    });
  }, []);

  const logout = useCallback(async () => {
    await auth.signOut();
    setUser(undefined);
  }, []);

  const values = useMemo(() => ({ user, logout }), [user, logout]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
