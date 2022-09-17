import type { FC, ChangeEventHandler } from 'react';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { ImageService } from '@/services';
import { useRef, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useModal } from '@/hooks';
import { createPost } from '@/repositories/post/post';
import { Button } from '@/components/atoms';
import { TypographyHeader } from '@/components/molecules';
import { PostCropImageModal } from '@/components/organisms/post';
import { Container, Wrapper } from '@/components/templates';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { Fragment } from 'react';
import { Area } from 'react-easy-crop';

const PostComposeForm: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const [imageService] = useState(new ImageService());
  const [file, setFile] = useState<File | null>(null);
  const [objectUrl, setObjectUrl] = useState<string>('');
  const [caption, setCaption] = useState<string>('');
  const [areaKeyword, setAreaKeyword] = useState<string>('');
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const [croppedObject, setCroppedObject] = useState<Blob | null>(null);
  const [croppedOjectUrl, setCroppedObjectUrl] = useState<string>('');

  const onCropComplete = useCallback((_: any, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const [isModalOpen, handleRequestOpen, handleRequestClose] = useModal();

  /**
   * 切り取り後の画像を生成し画面に表示
   */
  const showCroppedImage = useCallback(async () => {
    if (!croppedAreaPixels) return;
    try {
      const croppedImage = await imageService.getCroppedImage(
        objectUrl,
        croppedAreaPixels
      );
      const croppedImageUrl = URL.createObjectURL(croppedImage);
      setCroppedObject(croppedImage);
      setCroppedObjectUrl(croppedImageUrl);
      handleRequestClose();
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, objectUrl]);

  const handleOnClick = useCallback(() => {
    ref.current?.click();
  }, [ref]);

  const handleUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setFile(file);
      setObjectUrl(window.URL.createObjectURL(file));
      handleRequestOpen();
    }
  };

  const handleSubmit = useCallback(async () => {
    if (!file || !croppedObject) return;

    try {
      const formData = new FormData();
      formData.append('attachmentFile', croppedObject);
      formData.append('caption', caption ?? '');

      await createPost(formData);

      router.push('/home');
    } catch (error) {
      alert('アップロードに失敗しました');
    }
  }, [file, caption, croppedObject]);

  return (
    <Fragment>
      <TypographyHeader
        renderRight={() => (
          <Button
            size="small"
            onClick={handleSubmit}
            disabled={!file}
            variant="contained"
          >
            投稿
          </Button>
        )}
      >
        新規投稿
      </TypographyHeader>
      <Wrapper>
        <Container maxW="sm">
          <Fields>
            <input onChange={handleUpload} type="file" hidden ref={ref} />
            {!croppedOjectUrl ? (
              <Fragment>
                <IconButton sx={{ mr: 1 }} onClick={handleOnClick} size="large">
                  <AddCircleOutline fontSize="inherit" />
                </IconButton>
              </Fragment>
            ) : (
              <div
                css={css`
                  width: 52px;
                  height: 52px;
                  margin-right: 8px;
                  flex-shrink: 0;
                `}
              >
                <img
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                  onClick={handleOnClick}
                  src={croppedOjectUrl}
                />
              </div>
            )}
            <TextField
              multiline
              rows={3}
              fullWidth
              label="キャプション"
              variant="filled"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </Fields>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            label="場所を検索"
            variant="filled"
            value={areaKeyword}
            onChange={(e) => setAreaKeyword(e.target.value)}
          />
          {matches && (
            <Button
              size="large"
              position="center"
              onClick={handleSubmit}
              disabled={!file}
              variant="contained"
            >
              投稿
            </Button>
          )}
        </Container>
      </Wrapper>
      <PostCropImageModal
        isOpen={isModalOpen}
        objectUrl={objectUrl}
        onCropComplete={onCropComplete}
        showCroppedImage={showCroppedImage}
        handleRequestClose={handleRequestClose}
      />
    </Fragment>
  );
};

const Fields = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: 16,
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
