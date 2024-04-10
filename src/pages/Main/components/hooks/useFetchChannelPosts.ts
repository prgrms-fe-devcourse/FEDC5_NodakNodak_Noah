import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { getPostListByChannelId } from '@/apis/getPosts';

interface UseFetchChannelPostsParams {
  channelId?: string;
  limit: number;
}

const useFetchChannelPosts = ({
  channelId,
  limit,
}: UseFetchChannelPostsParams) =>
  useInfiniteQuery({
    queryKey: ['posts', 'channel', channelId],
    queryFn: ({ pageParam = 1 }) =>
      channelId
        ? getPostListByChannelId({
            channelId,
            limit,
            offset: pageParam,
          })
        : Promise.resolve([]),
    getNextPageParam: (lastPage, _, lastPageParmas) =>
      lastPage.length < limit ? undefined : lastPageParmas + limit,
    initialPageParam: 0,
    select: (data) => data.pages.flatMap((page) => page),
    placeholderData: keepPreviousData,
  });

export default useFetchChannelPosts;
