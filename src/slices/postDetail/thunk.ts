import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/utils/customAxios';
import { PostId } from '@/slices/postDetail/type';
import { name } from '@/slices/constants';

export const getPostDetail = createAsyncThunk(
  `${name.detailPost}/getPostDetail`,
  async ({ postId }: PostId) => {
    const { data } = await axiosInstance.get(`/posts/${postId}`);

    return data;
  },
);
