import type { FC, ChangeEventHandler } from 'react';
import { css } from '@emotion/react';
import { useRef, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/atoms';
import { IconButton, TextField, Box, styled } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { Fragment } from 'react';

const PostComposeForm: FC = () => {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [objectUrl, setObjectUrl] = useState<string>('');
  const [caption, setCaption] = useState<string>('');

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
    try {
      console.log(file);
      console.log(caption);
      router.push('/home');
    } catch (error) {
      alert('アップロードに失敗しました');
    }
  }, [file, caption]);

  return (
    <Fragment>
      <Fields>
        <input onChange={handleUpload} type="file" hidden ref={ref} />
        {!file ? (
          <Fragment>
            <IconButton sx={{ mr: 1 }} onClick={handleOnClick} size="large">
              <AddCircleOutline fontSize="inherit" />
            </IconButton>
          </Fragment>
        ) : (
          <div css={styles.thubmnail.base}>
            <div
              onClick={handleOnClick}
              css={styles.thubmnail.inner}
              style={{
                backgroundImage: `url(${objectUrl})`,
              }}
            />
          </div>
        )}
        <TextField
          multiline
          rows={3}
          sx={{ mb: 2 }}
          fullWidth
          label="キャプション"
          variant="filled"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </Fields>
      <Button
        position="right"
        onClick={handleSubmit}
        disabled={!file}
        variant="contained"
      >
        投稿
      </Button>
    </Fragment>
  );
};

const Fields = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
}));

const styles = {
  thubmnail: {
    base: css`
      width: 60px;
      height: 60px;
      padding: 8px;
      flex-shrink: 0;
    `,
    inner: css`
      height: 100%;
      width: 100%;
      background-size: cover;
      background-position: center;
    `,
  },
};

export default PostComposeForm;
