import { createAsyncThunk } from '@reduxjs/toolkit';
import { name } from '@/slices/userList/contants';
import axiosInstance from '@/utils/customAxios';

export const getUserList = createAsyncThunk(`${name}/getUserList`, async () => {
  const { data } = await axiosInstance.get('/users/get-users');

  return data;
});
