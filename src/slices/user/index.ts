import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import { initialUser } from '@/slices/initialState';
import { getMyInfo, getUser } from '@/slices/user/thunk';
import { UserInfo } from '@/slices/user/type';
import { User } from '@/types/APIResponseTypes';

const initialState: UserInfo = {
  currentUser: initialUser,
  authUser: initialUser,
  authUserStatus: 'idle',
  currentUserStatus: 'idle',
};

const userInfo = createSlice({
  name: SLICE_NAME.USER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.currentUserStatus = 'loading';
      state.currentUser = initialUser;
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
      state.authUser = initialUser;
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
