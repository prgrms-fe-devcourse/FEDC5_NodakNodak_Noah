import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { InitialState } from '@/slices/postList/type';
import { name } from '@/slices/postList/constants';
import {
  getPostListByChannelId,
  getPostListByUserId,
  getFullPostList,
  getPostListByMyId,
} from '@/slices/postList/thunks';
import { initialPost } from '@/slices/initialState';
import { Post } from '@/types/APIResponseTypes';

const initialState: InitialState = {
  posts: [initialPost],
  postListByChannelId: [initialPost],
  postListByUserId: [initialPost],
  postListByMyId: [initialPost],
  status: 'idle',
};

const postSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPostListByChannelId.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.postListByChannelId = action.payload;
      },
    );
    builder.addCase(
      getPostListByUserId.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.postListByUserId = action.payload;
      },
    );
    builder.addCase(
      getFullPostList.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
      },
    );
    builder.addCase(
      getPostListByMyId.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.postListByMyId = action.payload;
      },
    );

    builder.addMatcher(
      isAnyOf(
        getPostListByChannelId.pending,
        getPostListByUserId.pending,
        getFullPostList.pending,
      ),
      (state) => {
        state.status = 'loading';
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
        state.status = 'idle';
      },
    );
  },
});

export default postSlice.reducer;
