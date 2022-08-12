import type { FC } from 'react';
import type { Post } from '@/types/post';
import {
  PostAuthor,
  PostCaption,
  PostCreatedAt,
  PostIconButtons,
} from '@/components/organisms/post';
import { Box, Container as MUIContainer, styled } from '@mui/material';
import Image from 'next/image';

type Props = {
  post: Post;
};

const PostArticleMobile: FC<Props> = ({ post }) => {
  return (
    <Base>
      <Container>
        <PostAuthor sx={{ py: 2 }} user={post.user} />
      </Container>
      <ImageWrapper>
        <ImageInner>
          <Image src={post.images[0]} layout="fill" objectFit="cover" />
        </ImageInner>
      </ImageWrapper>
      <Container>
        <PostIconButtons post={post} sx={{ mb: 1 }} />
        <PostCaption post={post} />
        <PostCreatedAt post={post} sx={{ mt: 1 }} />
      </Container>
    </Base>
  );
};

const Base = styled(MUIContainer)(() => ({
  padding: '56px 0 88px',
  minHeight: '100vh',
  '@media screen and (min-width: 600px)': {
    paddingTop: 64,
  },
  '@media screen and (min-width: 1200px)': {
    paddingBottom: 32,
  },
}));

const Container = styled(Box)(() => ({
  padding: '0 8px',
}));

const ImageWrapper = styled(Box)(() => ({
  maxWidth: 562,
  maxHeight: 767,
  margin: '0 auto 8px',
}));

const ImageInner = styled(Box)(() => ({
  position: 'relative',
  paddingTop: '140%',
}));

export default PostArticleMobile;
