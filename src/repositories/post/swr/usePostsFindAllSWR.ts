import type { PostsFindAllResponse } from '@/types/response/post';
import { queryBuilder } from '@/utils';
import axios from 'axios';
import useSWR from 'swr';

type Args = {
  search?: string | string[];
  displayId?: string;
  limit?: number;
};

const usePostsFindAllSWR = (args?: Args) => {
  const query = queryBuilder({
    s: args?.search,
    displayId: args?.displayId,
    limit: args?.limit ?? 12,
  });

  return useSWR<PostsFindAllResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/posts${query}`,
    (url) => axios.get(url).then((res) => res.data)
  );
};

export default usePostsFindAllSWR;
