import type { User } from '@/types/user';
import type { FC } from 'react';
import { useUserState } from '@/states';
import { Avatar, styled } from '@mui/material';
import { Button } from '@/components/atoms';
import { Fragment } from 'react';

type Props = {
  user: User;
};

const UserProfile: FC<Props> = ({ user }) => {
  const [me] = useUserState();
  const isMe = user.userId === me.userId;

  return (
    <Fragment>
      <Header sx={{ mb: 2 }}>
        <Avatar
          sx={{ width: 72, height: 72, flexShrink: 0 }}
          src={user.avatar}
        />
        {isMe && (
          <Button href="/account/edit" sx={{ ml: 'auto' }} variant="outlined">
            プロフィールを編集
          </Button>
        )}
      </Header>
      <Body>
        <UserId>{user.userId}</UserId>
        <UserName>{user.name || user.userId}</UserName>
      </Body>
    </Fragment>
  );
};

const Header = styled('div')`
  display: flex;
  align-items: center;
`;

const Body = styled('div')``;

const UserId = styled('p')`
  font-size: 14px;
`;

const UserName = styled('p')`
  font-size: 16px;
  font-weight: bold;
`;

export default UserProfile;
