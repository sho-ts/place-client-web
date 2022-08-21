import type { FC, ReactNode } from 'react';
import { defaultState } from '@/states/user/atom';
import { getMe } from '@/repositories/user/get';
import { useEffect, useRef, useState } from 'react';
import { useUserState } from '@/states';
import { AuthService } from '@/services';
import { Fragment } from 'react';

const authService = new AuthService();

type Props = {
  children?: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const [, setUser] = useUserState();

  useEffect(() => {
    (async () => {
      if (checked) return;

      try {
        await authService.getCurrentUser();
        const response = await getMe();

        setUser({
          isLogin: true,
          ...response.data,
        });
      } catch (error) {
        setUser(defaultState);
      } finally {
        setChecked(true);
      }
    })();
  }, []);

  if (checked) {
    return <Fragment>{children}</Fragment>;
  }

  return <Fragment />;
};

export default AuthProvider;
