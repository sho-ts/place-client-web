import axios from 'axios';
import type { User } from '@/types/user';

type RequestBody = {
  authId: string;
  name: string;
  userId: string;
};

type Response = User;

const createUser = async (requestBody: RequestBody) => {
  return axios.post<Response>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/users`,
    requestBody
  );
};

export default createUser;
