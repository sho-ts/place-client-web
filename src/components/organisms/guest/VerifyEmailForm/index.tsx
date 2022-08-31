import type { ChangeEventHandler, FC } from 'react';
import CryptoJS from 'crypto-js';
import { AuthService } from '@/services';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import TextField from '@mui/material/TextField';
import { Button } from '@/components/atoms';
import { Fragment } from 'react';

const VerifyEmailForm: FC = () => {
  const [verifyKey, setVerifyKey] = useState<string>('');
  const router = useRouter();

  const changeVerifyKey: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setVerifyKey(event.target.value);
    },
    [setVerifyKey]
  );

  const verifyEmail = useCallback(async () => {
    const authService = new AuthService();
    const cryptoEmail = router.query.e as string;
    const email = CryptoJS.AES.decrypt(
      cryptoEmail.replaceAll(' ', '+'),
      process.env.NEXT_PUBLIC_CRYPTO_KEY
    ).toString(CryptoJS.enc.Utf8);

    try {
      await authService.verifyEmail(email, verifyKey);
      router.push('/login');
    } catch (error) {
      alert('メールアドレスの認証に失敗しました');
    }
  }, [router, verifyKey]);

  return (
    <Fragment>
      <p>ご登録されたメールアドレスに認証コードを送信しました。</p>
      <TextField
        type="password"
        sx={{ mb: 2, mt: 2 }}
        fullWidth
        label="認証コード"
        variant="filled"
        value={verifyKey}
        onChange={changeVerifyKey}
      />
      <Button variant="contained" position="center" onClick={verifyEmail}>
        認証
      </Button>
    </Fragment>
  );
};

export default VerifyEmailForm;
