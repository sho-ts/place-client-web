import type { NextPageWithLayout } from '@/types/page';
import type { ReactElement } from 'react';
import { AuthService } from '@/services';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { AuthForm } from '@/components/organisms/guest';
import { Layout } from '@/components/templates';

const RegisterPage: NextPageWithLayout = () => {
  const router = useRouter();

  const handleRegister = useCallback(
    async (email: string, password: string) => {
      const authService = new AuthService();
      try {
        await authService.register(email, password);
        router.push('/login');
      } catch (error) {
        alert('新規登録に失敗しました');
      }
    },
    []
  );

  return <AuthForm handle={handleRegister} buttonInnerText="新規登録" />;
};

RegisterPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default RegisterPage;
