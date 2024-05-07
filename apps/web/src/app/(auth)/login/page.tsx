import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col m-auto gap-5 p-8 w-[30%] h-min-[60%] bg-zinc-100 rounded-lg shadow-lg">
        <div className="flex h-[25%] w-full">
          <h1 className=" text-4xl w-min h-min m-auto">[logo]</h1>
        </div>

        <div className="space-y-10">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              type="text"
              id="email"
              placeholder="seuemail@example.com"
              className="h-12 active:scale-105 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-lg">
              Senha
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="h-12 active:scale-105 transition-all duration-300"
            />
            <div>
              <Button variant="link" className="w-min p-0" asChild>
                <Link href="/#">Esqueci a senha</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Button
            className="w-full h-12 text-lg active:scale-105 transition-all duration-300"
            type="submit"
            variant="default"
          >
            Entrar
          </Button>
          {/* <div className="flex justify-center">
            <Button variant="link" className="w-min p-0" asChild>
              <Link href="/register">Não possuo uma conta</Link>
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
