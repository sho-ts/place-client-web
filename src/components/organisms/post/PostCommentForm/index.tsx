import type { FC, ChangeEventHandler } from 'react';
import type { KeyedMutator } from 'swr';
import type { Post } from '@/types/post';
import type { CommentsFindAllResponse } from '@/types/response/comment';
import { useState, useCallback } from 'react';
import { createComment } from '@/repositories/comment/post';
import { Button, TextField } from '@mui/material';
import { Fragment } from 'react';

type Props = {
  post: Post;
  mutate: KeyedMutator<CommentsFindAllResponse>;
};

const PostCommentForm: FC<Props> = ({ post, mutate }) => {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const changeValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [value, setValue]
  );

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await createComment(post.postId, value);
      mutate();
      setValue('');
    } catch (error) {
      alert('コメントの投稿に失敗しました');
    } finally {
      setLoading(false);
    }
  }, [value, setValue]);

  return (
    <Fragment>
      <TextField
        label="コメントを追加..."
        variant="filled"
        size="small"
        value={value}
        onChange={changeValue}
        fullWidth
        sx={{ mr: 1 }}
      />
      <Button
        disabled={!value || loading}
        onClick={handleSubmit}
        variant="contained"
      >
        投稿
      </Button>
    </Fragment>
  );
};

export default PostCommentForm;
