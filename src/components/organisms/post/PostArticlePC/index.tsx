import type { FC } from 'react';
import type { Post, Comment } from '@/types/post';
import {
  PostAuthor,
  PostComment,
  PostIconButtons,
} from '@/components/organisms/post';
import { Container } from '@/components/templates';
import { Button, Box, TextField, styled } from '@mui/material';
import Image from 'next/image';

type Props = {
  post: Post;
};

const PostArticlePC: FC<Props> = ({ post }) => {
  const caption: Comment = {
    user: post.user,
    content: post.caption,
    createdAt: post.createdAt,
  };

  return (
    <Container>
      <PostBox>
        <ImageWrapper>
          <ImageInner>
            <Image src={post.images[0]} layout="fill" objectFit="cover" />
          </ImageInner>
        </ImageWrapper>
        <PostBody>
          <AuthorContainer>
            <PostAuthor user={post.user} />
          </AuthorContainer>
          <CommentContainer>
            <PostComment comment={caption} />
          </CommentContainer>
          <IconsContainer>
            <PostIconButtons post={post} />
          </IconsContainer>
          <AddCommentContainer>
            <TextField
              label="コメントを追加..."
              variant="filled"
              size="small"
              fullWidth
              sx={{ mr: 1 }}
            />
            <Button variant="contained">投稿</Button>
          </AddCommentContainer>
        </PostBody>
      </PostBox>
    </Container>
  );
};

const ImageWrapper = styled(Box)(() => ({
  width: '50%',
  flexShrink: 0,
  overflow: 'hidden',
}));

const ImageInner = styled(Box)(() => ({
  position: 'relative',
  paddingTop: '140%',
}));

const PostBox = styled(Box)(() => ({
  display: 'flex',
  margin: '0 auto',
  border: '1px solid #ccc',
}));

const PostBody = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const BaseContainer = styled(Box)(({ theme }) => ({
  padding: '1rem',
  flexShrink: 0,
}));

const AuthorContainer = styled(BaseContainer)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const CommentContainer = styled(Box)(({ theme }) => ({
  padding: '1rem',
  height: '100%',
  overflow: 'scroll',
  flexShrink: 1,
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  padding: '0.5rem',
  marginTop: 'auto',
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const AddCommentContainer = styled(BaseContainer)(() => ({
  display: 'flex',
  alignItmes: 'center',
}));

export default PostArticlePC;
