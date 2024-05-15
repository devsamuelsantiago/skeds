'use client';
import { useUserContext } from '@/common/providers/user-provider';

export function HelloCard() {
  const { user } = useUserContext();

  return user ? (
    <div>
      <h1 className="text-2xl font-medium">Olá, seja</h1>
      <p className="text-xl">bem vindo(a) {user.profile?.name}</p>
    </div>
  ) : (
    <></>
  );
}
