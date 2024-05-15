'use client';
import { useUserContext } from '@/common/providers/user-provider';
import { useRouter } from 'next/navigation';

type PrivatePageProps = {
  children: React.ReactNode;
};

export function PrivatePage({ children }: PrivatePageProps) {
  const router = useRouter();
  const { user } = useUserContext();

  if (!user) {
    router.push('/');
  }

  return user ? <>{children}</> : <></>;
}
