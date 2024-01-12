import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { PostList } from '@/slices/postList/type';
import { name } from '@/slices/postList/constants';
import {
  getPostListByChannelId,
  getPostListByUserId,
  getFullPostList,
  getPostListByMyId,
} from '@/slices/postList/thunks';

const initialState: PostList = {
  posts: [],
  postListByChannelId: [],
  postListByUserId: [],
  postListByMyId: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostListByChannelId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.postListByChannelId = action.payload;
    });
    builder.addCase(getPostListByUserId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.postListByUserId = action.payload;
    });
    builder.addCase(getFullPostList.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPostListByMyId.fulfilled, (state, action) => {
      state.postListByMyId = action.payload;
    });

    builder.addMatcher(
      isAnyOf(
        getPostListByChannelId.pending,
        getPostListByUserId.pending,
        getFullPostList.pending,
      ),
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      isAnyOf(
        getPostListByChannelId.fulfilled,
        getPostListByUserId.fulfilled,
        getPostListByChannelId.rejected,
        getPostListByUserId.rejected,
        getFullPostList.fulfilled,
        getFullPostList.rejected,
      ),
      (state) => {
        state.isLoading = false;
      },
    );
  },
});

export default postSlice.reducer;
