import type { FC } from 'react';
import type { Post } from '@/types/post';
import {
  PostAuthor,
  PostCaption,
  PostCreatedAt,
  PostIconButtons,
} from '@/components/organisms/post';
import { Container } from '@/components/templates';
import { Box, Container as MUIContainer, styled } from '@mui/material';
import { Fragment } from 'react';
import Image from 'next/image';

type Props = {
  post: Post;
};

const PostArticleMobile: FC<Props> = ({ post }) => {
  return (
    <Fragment>
      <Container>
        <PostAuthor sx={{ pb: 2 }} user={post.user} />
      </Container>
      <ImageWrapper>
        <Image src={post.files[0].url} layout="fill" objectFit="cover" />
      </ImageWrapper>
      <Container>
        <PostIconButtons post={post} sx={{ mb: 1 }} />
        <PostCaption post={post} />
        <PostCreatedAt createdAt={post.createdAt} sx={{ mt: 1 }} />
      </Container>
    </Fragment>
  );
};

const ImageWrapper = styled(Box)(() => ({
  margin: '0 auto 8px',
  position: 'relative',
  paddingTop: '140%',
}));

export default PostArticleMobile;
