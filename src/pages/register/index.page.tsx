import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { RegisterForm } from '@/components/organisms/guest';
import { Container } from '@/components/templates';

const RegisterPage: NextPageWithLayout = () => {
  return <RegisterForm />;
};

RegisterPage.getLayout = (page: ReactElement) => (
  <Container maxW="sm">{page}</Container>
);

export default RegisterPage;
