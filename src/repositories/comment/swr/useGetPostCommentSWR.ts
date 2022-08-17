import type { CommentsFindAllResponse } from '@/types/response/comment';
import useSWR from 'swr';
import axios from 'axios';

const useGetPostCommentSWR = (postId: string) => {
  return useSWR<CommentsFindAllResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/posts/${postId}/comments`,
    (url) => axios.get(url).then((res) => res.data)
  );
};

export default useGetPostCommentSWR;
