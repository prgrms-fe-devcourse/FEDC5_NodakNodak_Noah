// 채널, 사용자, 별로 다른 응답
// 채널ID, 작성자ID로 구분
import { api } from '@/apis/core';
import { Post, SearchedPost } from './responseModel';

export type Posts = Post[];

interface GetFullPostListParams {
  limit: number;
  offset: number;
}

export const getFullPostList = ({ limit, offset }: GetFullPostListParams) =>
  api.get<Posts>({
    url: '/posts',
    params: {
      limit,
      offset,
    },
  });

interface GetPostListByChannelIdParams {
  channelId: string;
  limit: number;
  offset: number;
}

export const getPostListByChannelId = ({
  channelId,
  limit,
  offset,
}: GetPostListByChannelIdParams) =>
  api.get<Posts>({
    url: `/posts/channel/${channelId}`,
    params: {
      limit,
      offset,
    },
  });

interface GetPostListBySearchParams {
  search: string;
}
export const getPostListBySearch = ({ search }: GetPostListBySearchParams) => {
  const query = `"title":"[^"]*${search}[^"]*"|"content":"[^"]*${search}[^"]*"`;

  return api.get<SearchedPost[]>({
    url: `/search/all/${query}`,
  });
};
