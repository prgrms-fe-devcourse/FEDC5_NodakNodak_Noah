import { name } from './contants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserList = createAsyncThunk(`${name}/getUserList`, async () => {
  const response = await axios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/users/get-users',
    method: 'get',
  });

  return response.data;
});
