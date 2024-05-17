'use client';
import { useUserContext } from '@/common/providers/user-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type PrivatePageProps = {
  children: React.ReactNode;
};

export function PrivatePage({ children }: PrivatePageProps) {
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return user ? <>{children}</> : <></>;
}
