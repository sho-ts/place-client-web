import type { User } from '@/types/user';
import axios from 'axios';
import { getHeaders } from '@/repositories';

const getMe = async () => {
  const headers = await getHeaders();

  return axios.get<User>(`${process.env.NEXT_PUBLIC_API_URL}/v1/users`, {
    headers,
  });
};

export default getMe;
