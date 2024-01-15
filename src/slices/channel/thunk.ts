import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '@/utils/customAxios';
import { name } from '@/slices/constants';

export const getChannel = createAsyncThunk(
  `${name.channel}/getChannel`,
  async () => {
    const { data } = await axiosInstance.get('/channels');

    return data;
  },
);
