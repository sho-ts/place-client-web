import type { UserDetail } from '@/types/user';
import type { FC } from 'react';
import { FOLLOW_STATUS } from '@/constants/follow';
import { styled } from '@mui/material/styles';
import { toggleFollow } from '@/repositories/follow/put';
import { useModal } from '@/hooks';
import { useUserState } from '@/states';
import { useState, useCallback, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@/components/atoms';
import { UserListModal } from '@/components/organisms/user';
import {
  FollowUserList,
  FollowerUserList,
} from '@/components/organisms/follow';
import { Fragment } from 'react';

type Props = {
  user: UserDetail;
  totalPosts?: number;
  totalFollows?: number;
  totalFollowers?: number;
  handleMutation: () => void;
};

const UserProfile: FC<Props> = ({
  user,
  totalPosts,
  totalFollows,
  totalFollowers,
  handleMutation,
}) => {
  const [isFollowModalOpen, handleFollowModalOpen, handleFollowModalClose] =
    useModal();
  const [
    isFollowerModalOpen,
    handleFollowerModalOpen,
    handleFollowerModalClose,
  ] = useModal();

  const [me] = useUserState();
  const isMe = user.userId === me.userId;

  const [isFollow, setIsFollow] = useState(
    user.followStatus === FOLLOW_STATUS.FOLLOW
  );

  useEffect(() => {
    setIsFollow(user.followStatus === FOLLOW_STATUS.FOLLOW);
  }, [user.followStatus]);

  const [toggleFollowButtonLoading, setToggleFollowButtonLoading] =
    useState(false);

  const handleToggleFollow = useCallback(async () => {
    try {
      setToggleFollowButtonLoading(true);

      await toggleFollow({
        followUserId: user.userId,
      });

      setIsFollow(!isFollow);

      handleMutation();
    } catch (error) {
      alert('エラーが発生しました');
    } finally {
      setToggleFollowButtonLoading(false);
    }
  }, [user, isFollow, handleMutation]);

  return (
    <Fragment>
      <Header sx={{ mb: 2 }}>
        <Avatar
          sx={{ width: 72, height: 72, flexShrink: 0 }}
          src={user.avatar}
        />
        <Counts sx={{ ml: 'auto' }}>
          <Count href="#posts">
            <dl>
              <dt>投稿</dt>
              <dd>{totalPosts ?? ' '}</dd>
            </dl>
          </Count>
          <Count as="button" onClick={handleFollowModalOpen}>
            <dl>
              <dt>フォロー</dt>
              <dd>{totalFollows ?? ' '}</dd>
            </dl>
          </Count>
          <Count as="button" onClick={handleFollowerModalOpen}>
            <dt>フォロワー</dt>
            <dd>{totalFollowers ?? ' '}</dd>
          </Count>
        </Counts>
      </Header>
      <Body sx={{ mb: 2 }}>
        <UserId>{user.displayId}</UserId>
        <UserName>{user.name || user.displayId}</UserName>
      </Body>
      <Footer>
        {isMe && (
          <Button href="/account/edit" variant="outlined">
            プロフィールを編集
          </Button>
        )}
        {!isMe && me.isLogin && (
          <Button
            disabled={toggleFollowButtonLoading}
            onClick={handleToggleFollow}
            variant={isFollow ? 'contained' : 'outlined'}
          >
            {isFollow ? 'フォロー解除' : 'フォローする'}
          </Button>
        )}
      </Footer>
      <UserListModal
        isOpen={isFollowModalOpen}
        handleRequestClose={handleFollowModalClose}
        renderUserList={(props) => (
          <FollowUserList displayId={user.displayId} {...props} />
        )}
      />
      <UserListModal
        isOpen={isFollowerModalOpen}
        handleRequestClose={handleFollowerModalClose}
        renderUserList={(props) => (
          <FollowerUserList displayId={user.displayId} {...props} />
        )}
      />
    </Fragment>
  );
};

const Header = styled('div')`
  display: flex;
  align-items: center;
`;

const Body = styled('div')``;

const Counts = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Count = styled('a')`
  display: block;
  padding: 8px 0;
  text-align: center;
  width: 64px;
  @media screen and (min-width: 600px) {
    width: 120px;
  }
  dt {
    font-weight: bold;
    font-size: 10px;
    @media screen and (min-width: 600px) {
      font-size: 12px;
    }
  }
  dd {
    font-size: 10px;
    @media screen and (min-width: 600px) {
      font-size: 12px;
    }
  }
`;

const Footer = styled('div')`
  display: flex;
  gap: 8px;
`;

const UserId = styled('p')`
  font-size: 14px;
`;

const UserName = styled('p')`
  font-size: 16px;
  font-weight: bold;
`;

export default UserProfile;
