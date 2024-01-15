import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import axiosInstance from '@/utils/customAxios';

export const getUserList = createAsyncThunk(
  `${SLICE_NAME.USER_LIST}/getUserList`,
  async () => {
    const { data } = await axiosInstance.get('/users/get-users');

    return data;
  },
);
