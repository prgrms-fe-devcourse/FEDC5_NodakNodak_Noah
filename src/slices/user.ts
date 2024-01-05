import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/types/APIResponseTypes';

interface UserInfo {
  currentUser: User | undefined;
  authUser: User | undefined;
  isLoading: boolean;
}

const initialState: UserInfo = {
  currentUser: undefined,
  authUser: undefined,
  isLoading: false,
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async ({ userId }: { userId: string }) => {
    const response = await axios({
      url: `https://kdt.frontend.5th.programmers.co.kr:5003/users/${userId}`,
      method: 'get',
    });

    return response.data;
  },
);

export const getMyInfo = createAsyncThunk(
  'user/getMyInfo',
  async ({ token }: { token: string }) => {
    const response = await axios({
      url: `https://kdt.frontend.5th.programmers.co.kr:5003/auth-user`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (updateData) => {
    const response = await axios.put(
      'https://kdt.frontend.5th.programmers.co.kr:5003/users/65870847b035721f23358062',
      updateData,
    );

    return response.data;
  },
);

export const userInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getMyInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      state.authUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMyInfo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userInfo.reducer;
