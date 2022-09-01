import type { UserDetail } from '@/types/user';
import axios from 'axios';
import { queryBuilder } from '@/utils';

type Args = {
  displayId: string;
  requestUserId?: string;
};

const getUser = async ({ displayId, requestUserId }: Args) => {
  const query = queryBuilder({ userId: requestUserId });
  
  return axios.get<UserDetail>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/users/${displayId}${query}`
  );
};

export default getUser;
