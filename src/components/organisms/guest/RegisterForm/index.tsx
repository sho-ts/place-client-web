import type { FC } from 'react';

import CryptoJS from 'crypto-js';
import { yup } from '@/utils';
import { AuthService } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, TextLink } from '@/components/atoms';
import { Fragment } from 'react';

type FormData = {
  email: string;
  userId: string;
  name: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  userId: yup
    .string()
    .matches(/^[0-9a-zA-Z]+$/)
    .required(),
  name: yup.string().required(),
  password: yup
    .string()
    .min(8)
    .max(24)
    .matches(/^[a-zA-Z0-9!-/:-@¥[-`{-~ ]*$/)
    .required(),
});

const RegisterForm: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(async (formData: FormData) => {
    setLoading(true);
    const authService = new AuthService();

    try {
      await authService.register(
        formData.name,
        formData.userId,
        formData.email,
        formData.password
      );
      router.push(
        `/register/verify?e=${CryptoJS.AES.encrypt(
          formData.email,
          process.env.NEXT_PUBLIC_CRYPTO_KEY
        )}`
      );
    } catch (error) {
      setLoading(false);
      alert('新規登録に失敗しました');
    }
  }, []);

  return (
    <Fragment>
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        label="ユーザーID"
        variant="filled"
        error={'userId' in formState.errors}
        helperText={formState.errors.userId?.message}
        {...register('userId')}
      />
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        label="ニックネーム"
        variant="filled"
        error={'name' in formState.errors}
        helperText={formState.errors.name?.message}
        {...register('name')}
      />
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
        disabled={loading}
        size="large"
        position="center"
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        新規登録
      </Button>
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <TextLink href="/login">ログインはこちら</TextLink>
      </Box>
    </Fragment>
  );
};

export default RegisterForm;
