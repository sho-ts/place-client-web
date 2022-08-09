import type { FC, ChangeEvent } from 'react';

import { useState, useCallback } from 'react';

import { TextField } from '@mui/material';
import { Button } from '@/components/atoms'
import { Fragment } from 'react';

type Props = {
  handle: (email: string, password: string) => void;
  buttonInnerText: string;
  renderFooter?: () => JSX.Element;
};

const AuthForm: FC<Props> = ({ handle, buttonInnerText, renderFooter }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const changeEmailValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        email: event.target.value,
      });
    },
    [formValues]
  );

  const changePasswordValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        password: event.target.value,
      });
    },
    [formValues]
  );

  return (
    <Fragment>
      <TextField
        onChange={changeEmailValue}
        sx={{ mb: 2 }}
        fullWidth
        label="メールアドレス"
        variant="filled"
        value={formValues.email}
      />
      <TextField
        type="password"
        onChange={changePasswordValue}
        sx={{ mb: 2 }}
        fullWidth
        label="パスワード"
        variant="filled"
        value={formValues.password}
      />
      <Button
        position='center'
        disabled={!formValues.email || !formValues.password}
        variant="contained"
        onClick={() => handle(formValues.email, formValues.password)}
      >
        {buttonInnerText}
      </Button>
      {renderFooter?.()}
    </Fragment>
  );
};

export default AuthForm;
