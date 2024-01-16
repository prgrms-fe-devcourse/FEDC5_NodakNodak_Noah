import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/utils/customAxios';
import { PostId } from '@/slices/postDetail/type';
import { SLICE_NAME } from '@/slices/constants';

export const getPostDetail = createAsyncThunk(
  `${SLICE_NAME.DETAIL_POST}/getPostDetail`,
  async ({ postId }: PostId) => {
    const { data } = await axiosInstance.get(`/posts/${postId}`);

    return data;
  },
);
