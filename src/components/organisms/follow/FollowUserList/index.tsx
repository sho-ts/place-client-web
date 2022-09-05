import type { FC } from 'react';
import { useGetFollowsByDisplayIdSWR } from '@/repositories/follow/swr';
import { useUserState } from '@/states';
import { UserList, UserListItem } from '@/components/organisms/user';

type Props = {
  displayId: string;
  handleRouteChange: (displayId: string) => void;
};

const FollowUserList: FC<Props> = ({ displayId, handleRouteChange }) => {
  const [user] = useUserState();
  const { data } = useGetFollowsByDisplayIdSWR({
    displayId,
    userId: user.userId,
  });

  return (
    <UserList>
      {data &&
        data.items.map((user) => (
          <UserListItem
            handleInfoClick={() => handleRouteChange(user.displayId)}
            key={user.userId}
            user={user}
          />
        ))}
    </UserList>
  );
};

export default FollowUserList;
