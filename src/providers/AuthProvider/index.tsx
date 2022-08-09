import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useUserState } from '@/states';
import { AuthService } from '@/services';
import { Fragment } from 'react';

const authService = new AuthService();

type Props = {
  render: (isLogin: boolean) => JSX.Element;
};

const AuthProvider: FC<Props> = ({ render }) => {
  const router = useRouter();
  const isMounted = useRef(false);
  const [user, setUser] = useUserState();

  useEffect(() => {
    if (isMounted.current) return;

    authService
      .getCurrentUser()
      .then(() => {
        setUser({
          ...user,
          isLogin: true,
        });
      })
      .catch(() => {
        router.push('/login');
      })
      .finally(() => {
        isMounted.current = true;
      });
  }, []);

  if (user.isLogin) return render(user.isLogin);
  return <Fragment />;
};

export default AuthProvider;
