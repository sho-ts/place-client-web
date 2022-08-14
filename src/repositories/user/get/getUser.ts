import type { User } from '@/types/user';
import axios from 'axios';

const getUser = async (userId: string) => {
  return axios.get<User>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/${userId}`
  );
};

export default getUser;
