import type { FC } from 'react';
import { useGetFollowersByDisplayIdSWR } from '@/repositories/follow/swr';
import { useUserState } from '@/states';
import { UserList, UserListItem } from '@/components/organisms/user';

type Props = {
  displayId: string;
  handleRouteChange: (displayId: string) => void;
};

const FollowerUserList: FC<Props> = ({ displayId, handleRouteChange }) => {
  const [user] = useUserState();
  const { data } = useGetFollowersByDisplayIdSWR({
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

export default FollowerUserList;
