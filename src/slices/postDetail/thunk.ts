import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import { PostId } from '@/slices/postDetail/type';
import axiosInstance from '@/utils/customAxios';

export const getPostDetail = createAsyncThunk(
  `${SLICE_NAME.DETAIL_POST}/getPostDetail`,
  async ({ postId }: PostId) => {
    const { data } = await axiosInstance.get(`/posts/${postId}`);

    return data;
  },
);
