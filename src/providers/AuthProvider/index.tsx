import type { FC, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useUserState } from '@/states';
import { AuthService } from '@/services';
import { Fragment } from 'react';

const authService = new AuthService();

type Props = {
  children?: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const isMounted = useRef(false);
  const [checked, setChecked] = useState(false);
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
        setUser({
          ...user,
          isLogin: false,
        });
      })
      .finally(() => {
        setChecked(true);
        isMounted.current = true;
      });
  }, []);

  if (checked) {
    return <Fragment>{children}</Fragment>;
  }

  return <Fragment />;
};

export default AuthProvider;
