'use client';
import { Button } from '@/common/components/ui/button';
import { useUserContext } from '@/common/providers/user-provider';
import Link from 'next/link';

export default function HomeView() {
  const { user } = useUserContext();

  return (
    <main className="p-16 flex flex-col justify-start items-center gap-10">
      <div className="flex justify-center">
        <h1 className="text-4xl">Skeds</h1>
      </div>
      {user ? (
        <Button variant="default" asChild>
          <Link href={`/${user.type}`}>Dashboard</Link>
        </Button>
      ) : (
        <>
          <Button variant="default" asChild>
            <Link href="/auth/login">Entrar</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/auth/organization-register">Criar Organização</Link>
          </Button>
        </>
      )}
    </main>
  );
}
