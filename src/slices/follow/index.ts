import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUser, getMyInfo } from '@/slices/user';
import { InitialState } from '@/slices/follow/type';
import { name } from '@/slices/follow/constants';
import { follow, unfollow } from '@/slices/follow/thunk';
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
    builder.addCase(follow.fulfilled, (state, action) => {
      state.followData.followId = action.payload._id;
      state.followData.isFollowing = true;
    });
    builder.addCase(unfollow.fulfilled, (state, action) => {
      state.followData.followId = action.payload._id;
      state.followData.isFollowing = false;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.targetUser = action.payload;
    });
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      state.followData.isFollower = (action.payload as User).followers.some(
        ({ user }) => user === state.targetUser?._id,
      );
      state.followData.isFollowing = (action.payload as User)?.following?.some(
        ({ user }) => user === state.targetUser?._id,
      );
      state.followData.followId = (action.payload as User)?.following?.find(
        ({ user }) => user === state.targetUser?._id,
      )?._id;
    });

    builder.addMatcher(
      isAnyOf(follow.pending, unfollow.pending, getUser.pending),
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      isAnyOf(
        follow.fulfilled,
        unfollow.fulfilled,
        getUser.fulfilled,
        follow.rejected,
        unfollow.rejected,
        getUser.rejected,
      ),
      (state) => {
        state.isLoading = false;
      },
    );
  },
});

export const { setFollowData } = userInfo.actions;

export default userInfo.reducer;
