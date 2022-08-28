import type { FC } from 'react';
import type { Post, Comment } from '@/types/post';
import { styled } from '@mui/system';
import { useGetPostCommentSWR } from '@/repositories/comment/swr';
import {
  PostAuthor,
  PostComment,
  PostCommentForm,
  PostIconButtons,
} from '@/components/organisms/post';
import { Container } from '@/components/templates';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

  const { data, mutate } = useGetPostCommentSWR(post.postId);

  return (
    <Container>
      <PostBox>
        <ImageWrapper>
          <ImageInner>
            <Image src={post.files[0].url} layout="fill" objectFit="cover" />
          </ImageInner>
        </ImageWrapper>
        <PostBody>
          <AuthorContainer>
            <PostAuthor user={post.user} />
          </AuthorContainer>
          <CommentContainer>
            <PostComment comment={caption} />
            {data &&
              data.items.map((comment) => (
                <PostComment
                  sx={{ mt: 2 }}
                  key={comment.commentId}
                  comment={comment}
                />
              ))}
          </CommentContainer>
          <IconsContainer>
            <PostIconButtons post={post} />
          </IconsContainer>
          <AddCommentContainer>
            <PostCommentForm post={post} mutate={mutate} />
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

const PostBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 auto',
  border: `1px solid ${theme.palette.grey[300]}`,
}));

const PostBody = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderLeft: `1px solid ${theme.palette.grey[300]}`,
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
  maxHeight: '400px',
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
