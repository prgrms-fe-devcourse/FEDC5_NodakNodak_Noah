import { follow, unfollow } from './thunk';
import { name } from './constants';
import { InitialState } from './followType';
import { getUser, getMyInfo } from '../user';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/types/APIResponseTypes';

const initialState: InitialState = {
  targetUser: undefined,
  followData: {
    followId: undefined,
    isFollowing: false,
    isFollower: false,
  },
  isLoading: false,
};

export const userInfo = createSlice({
  name,
  initialState,
  reducers: {
    setFollowData: (state, action) => {
      state.followData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(follow.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(follow.fulfilled, (state, action) => {
      state.followData.followId = action.payload._id;
      state.followData.isFollowing = true;
      state.isLoading = false;
    });
    builder.addCase(follow.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(unfollow.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(unfollow.fulfilled, (state, action) => {
      state.followData.followId = action.payload._id;
      state.followData.isFollowing = false;
      state.isLoading = false;
    });
    builder.addCase(unfollow.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.targetUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getMyInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      state.followData.isFollower = (action.payload as User)?.followers?.some(
        ({ user }) => user === state.targetUser?._id,
      );
      state.followData.isFollowing = (action.payload as User)?.following?.some(
        ({ user }) => user === state.targetUser?._id,
      );
      state.followData.followId = (action.payload as User)?.following?.find(
        ({ user }) => user === state.targetUser?._id,
      )?._id;
      state.isLoading = false;
    });
    builder.addCase(getMyInfo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setFollowData } = userInfo.actions;

export default userInfo.reducer;
