import { createAsyncThunk } from '@reduxjs/toolkit';
import { name } from '@/slices/searchedData/constants';
import axiosInstance from '@/utils/customAxios';

export const searchAllData = createAsyncThunk(
  `${name}/searchAllData`,
  async ({ keyword }: { keyword: string }) => {
    const { data } = await axiosInstance.get(`/search/all/${keyword}`);

    return data;
  },
);

export const searchUserData = createAsyncThunk(
  `${name}/searchUserData`,
  async ({ keyword }: { keyword: string }) => {
    const { data } = await axiosInstance.get(`/search/users/${keyword}`);

    return data;
  },
);
