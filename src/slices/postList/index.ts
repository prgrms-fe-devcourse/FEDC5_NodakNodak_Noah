import { getPostListByChannelId, getPostListByUserId } from './thunks';
import { name } from './constants';
import { PostList } from './postListType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PostList = {
  posts: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostListByChannelId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostListByChannelId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPostListByChannelId.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getPostListByUserId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostListByUserId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPostListByUserId.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default postSlice.reducer;
