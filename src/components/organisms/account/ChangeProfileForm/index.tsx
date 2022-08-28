import type { FC, ChangeEventHandler } from 'react';
import type { ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import { changeProfile } from '@/repositories/user/put';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useState, useCallback, useRef } from 'react';
import { useUserState } from '@/states';
import { Button } from '@/components/atoms';
import { TypographyHeader } from '@/components/molecules';
import { Container, Wrapper } from '@/components/templates';
import MUIAvatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField';
import { Fragment } from 'react';

const ChangeProfileForm: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const [user, setUser] = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [objectUrl, setObjectUrl] = useState<string>('');
  const [formValues, setFormValues] = useState({
    displayId: user.displayId,
    name: user.name,
  });

  const changeDisplayIdValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        displayId: event.target.value,
      });
    },
    [formValues]
  );

  const changeNameValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        name: event.target.value,
      });
    },
    [formValues]
  );

  const handleOnClick = useCallback(() => {
    ref.current?.click();
  }, [ref]);

  const handleUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setFile(file);
      setObjectUrl(window.URL.createObjectURL(file));
    }
  };

  const handleSubmit = useCallback(async () => {
    if (!formValues.displayId || !formValues.name) return;

    try {
      setIsLoading(true);

      const formData = new FormData();
      file && formData.append('attachmentFile', file);
      formData.append('displayId', formValues.displayId);
      formData.append('name', formValues.name);

      const res = await changeProfile(formData);

      setUser({
        ...user,
        ...res.data,
      });

      router.push(`/${res.data.displayId}`);
    } catch (error) {
      alert('ユーザー情報の更新に失敗しました');
      setIsLoading(false);
    }
  }, [formValues, file, user]);

  return (
    <Fragment>
      <TypographyHeader
        renderLeft={() => (
          <Button href={`/${user.displayId}`} size="small" variant="outlined">
            戻る
          </Button>
        )}
        renderRight={() => (
          <Button
            onClick={handleSubmit}
            disabled={isLoading || !formValues.name || !formValues.displayId}
            size="small"
            variant="contained"
          >
            完了
          </Button>
        )}
      >
        プロフィールを編集
      </TypographyHeader>
      <Wrapper>
        <Container maxW="sm">
          <ChangeAvatar sx={{ mb: 2 }}>
            <Avatar
              onClick={handleOnClick}
              sx={{
                width: 70,
                height: 70,
              }}
              src={objectUrl || user.avatar}
            />
            <input onChange={handleUpload} type="file" hidden ref={ref} />
          </ChangeAvatar>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            variant="filled"
            label="ユーザーID"
            value={formValues.displayId}
            onChange={changeDisplayIdValue}
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            variant="filled"
            label="ニックネーム"
            value={formValues.name}
            onChange={changeNameValue}
          />
          {matches && (
            <Button
              onClick={handleSubmit}
              size="large"
              position="center"
              variant="contained"
              disabled={isLoading || !formValues.name || !formValues.displayId}
            >
              完了
            </Button>
          )}
        </Container>
      </Wrapper>
    </Fragment>
  );
};

const ChangeAvatar = styled('div')`
  display: flex;
  justify-content: center;
`;

const Avatar = styled(MUIAvatar)(() => ({
  width: 80,
  height: 80,
  cursor: 'pointer',
  '@media screen and (min-width: 600px)': {
    width: 120,
    height: 120,
  },
}));

export default ChangeProfileForm;
