import { Button } from '@/common/components/ui/button';
import Link from 'next/link';

export default function HomeView() {
  return (
    <main className="p-16 flex flex-col justify-start items-center gap-10">
      <div className="flex justify-center">
        <h1 className="text-4xl">Skeds</h1>
      </div>
      <Button variant="default" asChild>
        <Link href="/">Entrar</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/organization/register">Criar Organização</Link>
      </Button>
    </main>
  );
}
