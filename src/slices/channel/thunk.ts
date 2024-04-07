import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import axiosInstance from '@/utils/customAxios';

export const getChannel = createAsyncThunk(
  `${SLICE_NAME.CHANNEL}/getChannel`,
  async () => {
    const { data } = await axiosInstance.get('/channels');

    return data;
  },
);
