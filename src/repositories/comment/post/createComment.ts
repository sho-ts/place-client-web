import axios from 'axios';
import { getHeaders } from '@/repositories';

const createComment = async (postId: string, content: string) => {
  const headers = await getHeaders();

  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/post/comment`,
    { postId, content },
    {
      headers,
    }
  );
};

export default createComment;
