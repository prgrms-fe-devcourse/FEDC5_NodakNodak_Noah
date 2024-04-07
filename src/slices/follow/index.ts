import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import { follow, unfollow } from '@/slices/follow/thunk';
import { FollowData, InitialState } from '@/slices/follow/type';
import { initialUser } from '@/slices/initialState';
import { getMyInfo, getUser } from '@/slices/user/thunk';
import { Follow, User } from '@/types/APIResponseTypes';

const initialState: InitialState = {
  targetUser: initialUser,
  followData: {
    followId: undefined,
    isFollowing: false,
    isFollower: false,
  },
  status: 'idle',
};

const userInfo = createSlice({
  name: SLICE_NAME.FOLLOW,
  initialState,
  reducers: {
    setFollowData: (state, action: PayloadAction<FollowData>) => {
      state.followData = action.payload;
    },
    setIsFollowing: (state, action: PayloadAction<boolean>) => {
      state.followData.isFollowing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      follow.fulfilled,
      (state, action: PayloadAction<Follow>) => {
        state.followData.followId = action.payload._id;
        state.followData.isFollowing = true;
      },
    );
    builder.addCase(
      unfollow.fulfilled,
      (state, action: PayloadAction<Follow>) => {
        state.followData.followId = action.payload._id;
        state.followData.isFollowing = false;
      },
    );
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.targetUser = action.payload;
    });
    builder.addCase(
      getMyInfo.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.followData.isFollower = action.payload.followers.some(
          ({ follower }) => follower === state.targetUser?._id,
        );
        state.followData.isFollowing = action.payload?.following?.some(
          ({ user }) => user === state.targetUser?._id,
        );
        state.followData.followId = action.payload.following.find(
          ({ user }) => user === state.targetUser._id,
        )?._id;
      },
    );

    builder.addMatcher(
      isAnyOf(follow.pending, unfollow.pending, getUser.pending),
      (state) => {
        state.status = 'loading';
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
        state.status = 'idle';
      },
    );
  },
});

export const { setFollowData, setIsFollowing } = userInfo.actions;

export default userInfo.reducer;
