import type { User } from '@/types/user';
import axios from 'axios';
import { getHeaders } from '@/repositories';

type RequestBody = FormData;

type Response = User;

const changeProfile = async (requestBody: RequestBody) => {
  const headers = await getHeaders();

  return axios.put<Response>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/users`,
    requestBody,
    {
      headers,
    }
  );
};

export default changeProfile;
