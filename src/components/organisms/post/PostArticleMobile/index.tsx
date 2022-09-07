import type { FC } from 'react';
import type { Post } from '@/types/post';
import { styled } from '@mui/material/styles';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  PostAuthor,
  PostCaption,
  PostCreatedAt,
  PostIconButtons,
} from '@/components/organisms/post';
import { Container } from '@/components/templates';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import Image from 'next/image';

type Props = {
  post: Post;
};

const PostArticleMobile: FC<Props> = ({ post }) => {
  const router = useRouter();

  const handleCommentsButtonClick = useCallback(() => {
    router.push(`/post/${post.postId}/comments`);
  }, [post]);

  return (
    <Fragment>
      <Container>
        <PostAuthor sx={{ pb: 2 }} user={post.user} />
      </Container>
      <ImageWrapper>
        <Image src={post.files[0].url} layout='responsive' objectFit="cover" width='600' height='600' />
      </ImageWrapper>
      <Container>
        <PostIconButtons
          post={post}
          sx={{ mb: 1 }}
          handleCommentsButtonClick={handleCommentsButtonClick}
        />
        <PostCaption post={post} />
        <PostCreatedAt createdAt={post.createdAt} sx={{ mt: 1 }} />
      </Container>
    </Fragment>
  );
};

const ImageWrapper = styled(Box)`
  margin: 0 auto 8px;
  position: relative;

`

export default PostArticleMobile;
