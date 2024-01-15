import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import axiosInstance from '@/utils/customAxios';

export const searchAllData = createAsyncThunk(
  `${SLICE_NAME.SEARCHED_DATA}/searchAllData`,
  async ({ keyword }: { keyword: string }) => {
    const { data } = await axiosInstance.get(`/search/all/${keyword}`);

    return data;
  },
);

export const searchUserData = createAsyncThunk(
  `${SLICE_NAME.SEARCHED_DATA}/searchUserData`,
  async ({ keyword }: { keyword: string }) => {
    const { data } = await axiosInstance.get(`/search/users/${keyword}`);

    return data;
  },
);
