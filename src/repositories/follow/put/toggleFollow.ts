import axios from 'axios';
import { getHeaders } from '@/repositories';

type Args = {
  followUserId: string;
};

const toggleFollow = async ({ followUserId }: Args) => {
  const headers = await getHeaders();

  return axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/users/follows`,
    { followUserId },
    { headers }
  );
};

export default toggleFollow;
