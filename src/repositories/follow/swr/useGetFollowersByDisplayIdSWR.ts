import type { GetFollowersByDisplayIdResponse } from '@/types/response/follow';
import { queryBuilder } from '@/utils';
import axios from 'axios';
import useSWR from 'swr';

type Args = {
  displayId: string;
  userId?: string;
  limit?: number;
};

const useGetFollowersByDisplayIdSWR = (args: Args) => {
  const query = queryBuilder({
    userId: args.userId,
    limit: args?.limit ?? 10,
  });

  return useSWR<GetFollowersByDisplayIdResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/users/${args.displayId}/followers${query}`,
    (url) => axios.get(url).then((res) => res.data),
    { refreshInterval: 2000 }
  );
};

export default useGetFollowersByDisplayIdSWR;
