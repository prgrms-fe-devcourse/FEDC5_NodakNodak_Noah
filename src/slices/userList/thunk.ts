import { createAsyncThunk } from '@reduxjs/toolkit';
import { name } from '@/slices/constants';
import axiosInstance from '@/utils/customAxios';

export const getUserList = createAsyncThunk(
  `${name.userList}/getUserList`,
  async () => {
    const { data } = await axiosInstance.get('/users/get-users');

    return data;
  },
);
