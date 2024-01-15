import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/utils/customAxios';
import { SLICE_NAME } from '@/slices/constants';

export const getChannel = createAsyncThunk(
  `${SLICE_NAME.CHANNEL}/getChannel`,
  async () => {
    const { data } = await axiosInstance.get('/channels');

    return data;
  },
);
