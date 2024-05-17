'use client';
import { Button } from '@/common/components/ui/button';
import { useUserContext } from '@/common/providers/user-provider';
import Image from 'next/image';
import Sked from '/public/full-sked-transformed.png';
import Link from 'next/link';

export default function HomeView() {
  const { user } = useUserContext();

  return (
    <main className='bg-gradient-to-bl from-[#303136] to-[#111113] h-screen'>
      <header className="flex justify-center lg:justify-between w-full h-24 px-28">
        <div className="flex items-center">
          <Link href="#">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">[ ]</span>
              <h1 className="text-2xl font-bold text-white">Skeds</h1>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            <Link href="/">
              <span className="text-md font-semibold text-white">Home</span>
            </Link>
            <Link href="/">
              <span className="text-md font-semibold text-white">About Us</span>
            </Link>
            <Link href="/">
              <span className="text-md font-semibold text-white">Blog</span>
            </Link>
            <Link href="/">
              <span className="text-md font-semibold text-white">Contact Us</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <Button variant="default" className="w-28 rounded-full bg-[color:var(--green-10)]" asChild>
                <Link href={`/${user.type}`} className="font-semibold text-white">
                  Dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="default" className="w-28 rounded-full bg-[color:var(--green-10)]" asChild>
                  <Link href="/auth/login" className="font-semibold text-white">
                    Entrar
                  </Link>
                </Button>
                <Button variant="outline" className="w-40 rounded-full bg-[color:var(--green-10)]" asChild>
                  <Link href="/auth/login" className="font-semibold text-white">
                    Quero Fazer Parte
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
      <div className='flex justify-center lg:justify-between p-28'>
        <div className="flex flex-col gap-8  w-[50%]">
          <h1 className="text-6xl font-bold space-y-2">
            <p>Frase</p>
            <p>Muito Interessante</p>
          </h1>
          <span className="text-md">
            Venha se aventurar pelo espaço desgraça lorem ipsum dolor sianmet lorem ipsum dolor sianmet lorem ipsum
            dolor sianmet lorem ipsum dolor sianmet lorem ipsum dolor sianmet lorem ipsum dolor sianmet lorem ipsum
            dolor sianmet lorem ipsum dolor sianmet
          </span>
        </div>
        <div className="w-[50%] hidden lg:flex justify-center items-center">
          <Image alt="Image" src={Sked} className='invert rotate-12' width={400} />
        </div>
      </div>
    </main>
  );
}
