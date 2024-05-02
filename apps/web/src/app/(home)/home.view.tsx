import { Button } from '@/common/components/ui/button';
import Link from 'next/link';

export default function HomeView() {
  return (
    <main>
      <header className="flex items-center justify-end top-0 sticky h-24 px-10 ">
        <div className="flex">
          <Button variant="default" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
        </div>
      </header>
      <div className="flex justify-center">
        <h1 className="text-4xl">Skeds</h1>
      </div>
    </main>
  );
}
