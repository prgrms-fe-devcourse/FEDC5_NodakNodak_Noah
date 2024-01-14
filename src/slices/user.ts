import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from '@/utils/customAxios';
import { UserInfo } from '@/slices/user/type';
import { initialUser } from '@/slices/initialState';
import { User } from '@/types/APIResponseTypes';

const initialState: UserInfo = {
  currentUser: initialUser,
  authUser: initialUser,
  authUserStatus: 'idle',
  currentUserStatus: 'idle',
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async ({ userId }: { userId: string }) => {
    const { data } = await axiosInstance.get(`/users/${userId}`);

    return data;
  },
);

export const getMyInfo = createAsyncThunk('user/getMyInfo', async () => {
  const { data } = await axiosInstance.get('auth-user');

  return data;
});

const userInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.currentUserStatus = 'loading';
    });
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.currentUserStatus = 'idle';
    });
    builder.addCase(getUser.rejected, (state) => {
      state.currentUserStatus = 'failed';
    });
    builder.addCase(getMyInfo.pending, (state) => {
      state.authUserStatus = 'loading';
    });
    builder.addCase(
      getMyInfo.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.authUser = action.payload;
        state.authUserStatus = 'idle';
      },
    );
    builder.addCase(getMyInfo.rejected, (state) => {
      state.authUserStatus = 'failed';
    });
  },
});

export default userInfo.reducer;
