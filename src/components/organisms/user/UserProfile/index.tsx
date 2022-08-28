import type { User } from '@/types/user';
import type { FC } from 'react';
import { styled } from '@mui/system';
import { useUserState } from '@/states';
import Avatar from '@mui/material/Avatar';
import { Button } from '@/components/atoms';
import Link from 'next/link';
import { Fragment } from 'react';

type Props = {
  user: User;
  totalPosts?: number;
  totalFollows?: number;
  totalFollowers?: number;
};

const UserProfile: FC<Props> = ({
  user,
  totalPosts,
  totalFollows,
  totalFollowers,
}) => {
  const [me] = useUserState();
  const isMe = user.userId === me.userId;

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
              <dd>{totalPosts}</dd>
            </dl>
          </Count>
          <Link passHref href="/">
            <Count>
              <dl>
                <dt>フォロー</dt>
                <dd>{totalFollows}</dd>
              </dl>
            </Count>
          </Link>
          <Link passHref href="/">
            <Count>
              <dt>フォロワー</dt>
              <dd>{totalFollowers}</dd>
            </Count>
          </Link>
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
      </Footer>
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
