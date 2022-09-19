import type { FC } from 'react';

import { AuthService } from '@/services';
import { getMe } from '@/repositories/user/get';
import { yup } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUserState } from '@/states';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, TextLink } from '@/components/atoms';
import { Fragment } from 'react';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .max(24)
    .matches(/^[a-zA-Z0-9!-/:-@¥[-`{-~ ]*$/)
    .required(),
});

const LoginForm: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [, setUser] = useUserState();

  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(async (data: FormData) => {
    setLoading(true);
    const authService = new AuthService();

    try {
      await authService.login(data.email, data.password);

      const response = await getMe();
      setUser({
        isLogin: true,
        ...response.data,
      });

      router.push('/home');
    } catch (error) {
      setLoading(false);
      alert('Eメールかパスワードが違います');
    }
  }, []);

  return (
    <Fragment>
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        label="メールアドレス"
        variant="filled"
        error={'email' in formState.errors}
        helperText={formState.errors.email?.message}
        {...register('email')}
      />
      <TextField
        type="password"
        sx={{ mb: 2 }}
        fullWidth
        label="パスワード"
        variant="filled"
        error={'password' in formState.errors}
        helperText={formState.errors.password?.message}
        {...register('password')}
      />
      <Button
        size="large"
        position="center"
        disabled={loading}
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        ログイン
      </Button>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <TextLink href="/register">新規登録はこちら</TextLink>
      </Box>
    </Fragment>
  );
};

export default LoginForm;
