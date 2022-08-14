import type { Comment } from '@/types/comment';
import useSWR from 'swr';
import axios from 'axios';

const useGetPostCommentSWR = (postId: string) => {
  return useSWR<Comment[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/post/${postId}/comment`,
    (url) => axios.get(url).then((res) => res.data)
  );
};

export default useGetPostCommentSWR;
