import type { UserDetail } from '@/types/user';
import axios from 'axios';

const getUser = async (userId: string) => {
  return axios.get<UserDetail>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/users/${userId}`
  );
};

export default getUser;
