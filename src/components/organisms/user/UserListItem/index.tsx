import type { FC } from 'react';
import type { FollowUser } from '@/types/follow';
import { toggleFollow } from '@/repositories/follow/put';
import { styled } from '@mui/material/styles';
import { useState, useCallback } from 'react';
import { useUserState } from '@/states';
import { Button } from '@/components/atoms';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';

type Props = {
  user: FollowUser;
  handleInfoClick: () => void;
};

const UserListItem: FC<Props> = ({ user, handleInfoClick }) => {
  const [userState] = useUserState();
  const [isLoading, setIsLoading] = useState(false);
  const [isFollow, setIsFollow] = useState(!!user.followStatus);

  const followButtonVariant = isFollow ? 'contained' : 'outlined';
  const followButtonText = isFollow ? 'フォロー解除' : 'フォローする';

  const handleFollowToggle = useCallback(async () => {
    try {
      setIsLoading(true);

      await toggleFollow({ followUserId: user.userId });

      setIsFollow(!isFollow);
    } catch (e) {
      alert('通信エラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  }, [isFollow]);

  return (
    <Base>
      <Info onClick={handleInfoClick}>
        <Avatar src={user.avatar} sx={{ flexShrink: 0 }} />
        <dl>
          <dt>{user.name}</dt>
          <dd>{user.displayId}</dd>
        </dl>
      </Info>
      {user.userId !== userState.userId && (
        <Button
          disabled={isLoading}
          onClick={handleFollowToggle}
          sx={{ flexShrink: 0 }}
          size="small"
          variant={followButtonVariant}
        >
          {followButtonText}
        </Button>
      )}
    </Base>
  );
};

const Base = styled('li')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  dl {
    margin-left: 16px;
    margin-right: auto;
  }
  dt {
    font-weight: bold;
    font-size: 13px;
    max-width: 80px;
    @media screen and (min-width: 375px) {
      max-width: 120px;
    }
  }
  dd {
    font-size: 13px;
    color: #999;
    max-width: 80px;
    @media screen and (min-width: 375px) {
      max-width: 120px;
    }
  }
`;

const Info = styled('button')`
  display: flex;
  align-items: center;
`;

export default UserListItem;
