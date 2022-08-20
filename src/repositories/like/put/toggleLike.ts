import axios from 'axios';
import { getHeaders } from '@/repositories';

const toggleLike = async (postId: string) => {
  const headers = await getHeaders();

  return axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/posts/${postId}/like`,
    {},
    {
      headers,
    }
  );
};

export default toggleLike;
