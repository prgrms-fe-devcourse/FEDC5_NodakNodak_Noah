import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { Post } from '@/apis/responseModel';
import { SLICE_NAME } from '@/slices/constants';
import {
  getFullPostList,
  getPostListByChannelId,
  getPostListByMyId,
  getPostListByUserId,
} from '@/slices/postList/thunks';
import { InitialState } from '@/slices/postList/type';

const initialState: InitialState = {
  posts: [],
  postListByChannelId: [],
  postListByUserId: [],
  postListByMyId: [],
  status: 'idle',
};

const postSlice = createSlice({
  name: SLICE_NAME.POST_LIST,
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
        state.postListByChannelId = [];
        state.postListByUserId = [];
        state.posts = [];
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
