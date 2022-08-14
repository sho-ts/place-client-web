import axios from 'axios';
import { getHeaders } from '@/repositories';

const createPost = async (data: FormData) => {
  const headers = await getHeaders();

  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/post`, data, {
    headers,
  });
};

export default createPost;
