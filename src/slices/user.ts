import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { User } from '@/types/APIResponseTypes';
import axiosInstance from '@/utils/customAxios';

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
    const { data } = await axiosInstance.get(`/users/${userId}`);

    return data;
  },
);

export const getMyInfo = createAsyncThunk(
  'user/getMyInfo',
  async ({ token }: { token: string }) => {
    const { data } = await axiosInstance.get('auth-user');

    return data;
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
