import { name } from './constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface GetPostsByChannelIdParams {
  channelId: string;
  offset?: number;
  limit?: number;
}

export const getPostListByChannelId = createAsyncThunk(
  `${name}/getPostsByChannelId`,
  async ({ channelId, offset, limit }: GetPostsByChannelIdParams) => {
    const queries = paginationClaculator(offset, limit);

    const response = await axios({
      url: `https://kdt.frontend.5th.programmers.co.kr:5003/posts/channel/${channelId}/${queries}`,
      method: 'get',
    });

    return response.data;
  },
);

const paginationClaculator = (offset?: number, limit?: number) => {
  if (offset === undefined || limit === undefined) {
    return '';
  }

  return `?offset=${offset}&limit=${limit}`;
};
