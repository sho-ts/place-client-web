import type { FC, ChangeEventHandler } from 'react';
import type { KeyedMutator } from 'swr';
import type { CommentsFindAllResponse } from '@/types/response/comment';
import type { SxProps } from '@mui/system/styleFunctionSx';
import { styled } from '@mui/material/styles';
import { useUserState } from '@/states';
import { useState, useCallback } from 'react';
import { createComment } from '@/repositories/comment/post';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type Props = {
  sx?: SxProps;
  postId: string;
  mutate: KeyedMutator<CommentsFindAllResponse>;
};

const PostCommentForm: FC<Props> = ({ postId, mutate, sx }) => {
  const [user] = useUserState();
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
      await createComment(postId, value);
      mutate();
      setValue('');
    } catch (error) {
      alert('コメントの投稿に失敗しました');
    } finally {
      setLoading(false);
    }
  }, [value, setValue]);

  return (
    <Base sx={sx}>
      {!user.isLogin && <Guard>コメントするにはログインしてください</Guard>}
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
    </Base>
  );
};

const Base = styled('div')`
  position: relative;
  display: flex;
  width: 100%;
`;

const Guard = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  color: #fff;
  cursor: not-allowed;
  z-index: 10;
`;

export default PostCommentForm;
