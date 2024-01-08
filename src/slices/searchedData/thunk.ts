import { name } from './constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchAllData = createAsyncThunk(
  `${name}/searchAllData`,
  async ({ keyword }: { keyword: string }) => {
    const { data } = await axios({
      url: `https://kdt.frontend.5th.programmers.co.kr:5003/search/all/${keyword}`,
      method: 'get',
    });

    return data;
  },
);

export const searchUserData = createAsyncThunk(
  `${name}/searchUserData`,
  async ({ keyword }: { keyword: string }) => {
    const { data } = await axios({
      url: `https://kdt.frontend.5th.programmers.co.kr:5003/search/users/${keyword}`,
      method: 'get',
    });

    return data;
  },
);
