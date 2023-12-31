import {
  getPostListByChannelId,
  getPostListByUserId,
  getFullPostList,
} from './thunks';
import { name } from './constants';
import { PostList } from './postListType';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState: PostList = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostListByChannelId.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPostListByUserId.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getFullPostList.fulfilled, (state, action) => {
      state.posts = action.payload;
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
