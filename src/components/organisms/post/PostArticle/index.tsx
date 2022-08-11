import type { FC } from 'react';
import type { Post } from '@/types/post';
import { PostAuthor, PostAuthorName } from '@/components/organisms/post';
import {
  Box,
  Container as MUIContainer,
  IconButton,
  styled,
} from '@mui/material';
import { FavoriteBorder, ChatBubbleOutlineOutlined } from '@mui/icons-material';
import Image from 'next/image';

type Props = {
  post: Post;
};

const PostArticle: FC<Props> = ({ post }) => {
  return (
    <Base>
      <Container>
        <PostAuthor sx={{ py: 2 }} author={post.author} />
      </Container>
      <ImageWrapper>
        <ImageInner>
          <Image src={post.images[0]} layout="fill" objectFit="cover" />
        </ImageInner>
      </ImageWrapper>
      <Container>
        <Box sx={{ mb: 1 }}>
          <IconButton>
            <FavoriteBorder sx={{ color: '#333' }} />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineOutlined sx={{ color: '#333' }} />
          </IconButton>
        </Box>
        <Box>
          <PostAuthorName sx={{ mr: 1 }} author={post.author} />
          <Content>{post.content}</Content>
        </Box>
        <CreatedAt sx={{ mt: 1 }}>{post.createdAt}</CreatedAt>
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

const Content = styled('p')(() => ({
  fontSize: 13,
  display: 'inline',
  wordBreak: 'break-all',
}));

const CreatedAt = styled('p')(({ theme }) => ({
  fontSize: 10,
  color: theme.palette.grey[700],
}));

export default PostArticle;
