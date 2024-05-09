'use client';
import { Form } from '@/common/components/form/form-provider';
import { Input } from '@/common/components/form/input';
import { PageWrapper } from '@/common/components/page-wrapper';

export function RegisterView() {
  const handleSubmit = (values: Record<string, unknown>) => {
    // console.log(values);
  };

  return (
    <PageWrapper>
      <h1>Registre sua organização</h1>
      <Form onSubmit={handleSubmit}>
        <Input name="name" label="Nome" type="text" validation={['required']} autoComplete="one-time-code" />
        <Input name="email" label="Email" type="text" validation={['email']} autoComplete="one-time-code" />
        <Input name="password" label="Senha" type="password" autoComplete="one-time-code" />
        <button type="submit">Cadastrar</button>
      </Form>
    </PageWrapper>
  );
}
