'use client';
import { useState } from 'react';
import { Form } from '@/common/components/form/form-provider';
import { Input } from '@/common/components/form/input';
import { Header } from '@/common/components/header';
import { Button } from '@/common/components/ui/button';
import { createUserWithEmailAndPassword } from '@/lib/firebase/auth';
import { createDatabaseUser } from '@/lib/firebase/user';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SkedImage from '/public/minimalist-sked.png';
import { createOrganization } from '@/lib/firebase/organization';
import { Progress } from '@/common/components/ui/progress';
import { Toaster } from '@/common/components/ui/toaster';
import { useToast } from '@/common/components/ui/use-toast';

export function RegisterView() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (values: Record<string, unknown>) => {
    try {
      setLoading(20);
      const user = await createUserWithEmailAndPassword({
        email: values.email as string,
        password: values.password as string,
      });
      setLoading(50);
      const data = user && (await createDatabaseUser({ user, name: values.name as string, type: 'organization' }));
      setLoading(75);
      user &&
        data?.organizationUid?.uid &&
        (await createOrganization({ organizationUid: data.organizationUid.uid, ownerUid: user.uid }));
      router.push('/organization');
      setLoading(100);
    } catch (error) {
      toast({ title: 'Erro ao criar a organização. Tente novamente mais tarde...' });
      setLoading(0);
      console.error(error);
    }
  };

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
        {loading <= 0 ? (
          <>
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-center text-2xl font-semibold">Criar organização</h2>
              <p className="text-center text-sm text-muted-foreground">
                Preencha os dados abaixo para criar sua organização
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-96">
              <Input
                name="name"
                placeholder="Nome da organização"
                type="text"
                validation={['required']}
                autoComplete="one-time-code"
                className="font-inter"
              />
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
                onChange={(value) => setPassword(value)}
                autoComplete="one-time-code"
              />
              <Input
                name="repeat_password"
                placeholder="Repita a senha"
                type="password"
                validation={['required']}
                equalsTo={password}
                autoComplete="one-time-code"
              />
              <Button type="submit" variant="default" className="w-full max-w-96">
                Registrar
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Ao continuar, você concorda com nossos <br /> Termos de Serviço e Política de Privacidade.
            </p>
          </>
        ) : (
          <div className="w-1/2">
            <Progress value={loading} />
          </div>
        )}
      </Form>
      <Toaster />
    </div>
  );
}
