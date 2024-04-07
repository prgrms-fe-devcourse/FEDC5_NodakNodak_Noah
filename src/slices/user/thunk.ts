import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import axiosInstance from '@/utils/customAxios';

export const getUser = createAsyncThunk(
  `${SLICE_NAME.USER}/getUser`,
  async ({ userId }: { userId: string }) => {
    const { data } = await axiosInstance.get(`/users/${userId}`);

    return data;
  },
);

export const getMyInfo = createAsyncThunk(
  `${SLICE_NAME.USER}/getMyInfo`,
  async () => {
    const { data } = await axiosInstance.get('auth-user');

    return data;
  },
);
