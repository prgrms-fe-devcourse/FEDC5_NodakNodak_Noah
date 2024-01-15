import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/utils/customAxios';
import { name } from '@/slices/constants';

export const getUser = createAsyncThunk(
  `${name.user}/getUser`,
  async ({ userId }: { userId: string }) => {
    const { data } = await axiosInstance.get(`/users/${userId}`);

    return data;
  },
);

export const getMyInfo = createAsyncThunk(
  `${name.user}/getMyInfo`,
  async () => {
    const { data } = await axiosInstance.get('auth-user');

    return data;
  },
);
