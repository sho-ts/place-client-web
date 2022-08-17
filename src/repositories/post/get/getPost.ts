import type { Post } from '@/types/post';
import axios from 'axios';

const getPost = async (postId: string) => {
  return axios.get<Post>(`${process.env.NEXT_PUBLIC_API_URL}/v1/posts/${postId}`);
};

export default getPost;
