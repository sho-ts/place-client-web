import type { FC } from 'react';
import type { Comment } from '@/types/post';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/system';
import { PostAuthorName, PostCreatedAt } from '@/components/organisms/post';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

type Props = {
  comment: Comment;
  sx?: SxProps;
};

const PostComment: FC<Props> = ({ comment, sx }) => {
  return (
    <Base sx={sx}>
      <AvatarWrapper>
        <Avatar src={comment.user.avatar} />
      </AvatarWrapper>
      <Box sx={{ ml: 2 }}>
        <Box>
          <PostAuthorName user={comment.user} sx={{ mr: 1 }} />
          <Content>{comment.content}</Content>
        </Box>
        <PostCreatedAt createdAt={comment.createdAt} sx={{ mt: 1 }} />
      </Box>
    </Base>
  );
};

const Base = styled(Box)(() => ({
  display: 'flex',
}));

const AvatarWrapper = styled(Box)(() => ({
  flexShrink: 0,
}));

const Content = styled('p')(() => ({
  fontSize: 13,
  display: 'inline',
  wordBreak: 'break-all',
}));

export default PostComment;
