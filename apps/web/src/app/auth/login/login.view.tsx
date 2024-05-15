'use client';
import { useEffect, useState } from 'react';
import { Form } from '@/common/components/form/form-provider';
import { Input } from '@/common/components/form/input';
import { Header } from '@/common/components/header';
import { Button } from '@/common/components/ui/button';
import { signInWithEmailAndPassword } from '@/lib/firebase/auth';
import { Toaster } from '@/common/components/ui/toaster';
import { useToast } from '@/common/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/common/providers/user-provider';
import Image from 'next/image';
import SkedImage from '/public/minimalist-sked.png';
import GoogleImage from '/public/google.png';

export function LoginView() {
  const router = useRouter();
  const { user } = useUserContext();
  const { toast } = useToast();
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (values: Record<string, unknown>) => {
    setDisabled(true);
    const firebaseUser = await signInWithEmailAndPassword({
      email: values.email as string,
      password: values.password as string,
    });
    if (!firebaseUser) {
      toast({ title: 'Email ou senha inválidos!' });
      setDisabled(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.push(`/${user.type}`);
    }
  }, [user, router]);

  return (
    <div className="flex justify-center lg:justify-between items-center min-h-[100vh]">
      <Header />
      <div className="hidden lg:flex flex-1 justify-center items-center opacity-10">
        <Image alt="Image" src={SkedImage} width={200} height={200} className="brightness-0 invert" />
      </div>
      <Form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-[100%] lg:w-[50%] h-[100vh] p-8 justify-center items-center bg-background rounded-md"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-center text-2xl font-semibold">Skeds</h2>
          <p className="text-center text-sm text-muted-foreground">Entre com sua conta para continuar</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-96">
          <Button variant="outline" className="text-sm text-muted-foreground w-full">
            <Image alt="Google" src={GoogleImage} width={16} height={16} className="mr-2" />
            Login com Google
          </Button>
          {/* <Button variant="outline" className="text-sm text-muted-foreground w-full">
            <Image alt="Apple" src={AppleImage} width={16} height={16} className="mr-2 brightness-0 invert" />
            Login com Apple
          </Button> */}
        </div>
        <div className="flex items-center justify-center gap-6">
          <hr className="w-28" />
          <p className="text-sm text-muted-foreground">ou</p>
          <hr className="w-28" />
        </div>
        <div className="flex flex-col gap-4 w-full max-w-96">
          <Input
            name="email"
            placeholder="Email"
            type="text"
            validation={['email', 'required']}
            autoComplete="one-time-code"
          />
          <Input
            name="password"
            placeholder="Senha"
            type="password"
            validation={['required']}
            autoComplete="one-time-code"
          />
          <Button type="submit" variant="default" className="w-full max-w-96" disabled={disabled}>
            Entrar
          </Button>
        </div>
      </Form>
      <Toaster />
    </div>
  );
}
