import type { Post } from '@/types/post';
import axios from 'axios';

const getPost = async (postId: string, userId?: string) => {
  const query = userId ? `?userId=${userId}` : '';

  return axios.get<Post>(`${process.env.NEXT_PUBLIC_API_URL}/v1/posts/${postId}${query}`);
};

export default getPost;
