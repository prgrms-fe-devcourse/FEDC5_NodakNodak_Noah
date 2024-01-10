import { name } from './contants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/utils/customAxios';

export const getUserList = createAsyncThunk(`${name}/getUserList`, async () => {
  const { data } = await axiosInstance.get('/users/get-users');

  return data;
});
