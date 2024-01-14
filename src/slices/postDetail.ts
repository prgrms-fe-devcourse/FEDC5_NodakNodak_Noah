import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosInstance from '@/utils/customAxios';
import { InitialState, PostId } from '@/slices/postDetail/type';
import { initialPost } from './initialState';
import { Post } from '@/types/APIResponseTypes';

const initialState: InitialState = {
  post: initialPost,
  status: 'idle',
};

export const getPostDetail = createAsyncThunk(
  'detailPost/getPostDetail',
  async ({ postId }: PostId) => {
    const { data } = await axiosInstance.get(`/posts/${postId}`);

    return data;
  },
);

const detailPostSlice = createSlice({
  name: 'detailPost',
  initialState,
  reducers: {
    deleteComment: (state, action: PayloadAction<string>) => {
      const commentId = action.payload;
      state.post.comments = state.post.comments.filter(
        (comment) => comment._id !== commentId,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostDetail.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      getPostDetail.fulfilled,
      (state, action: PayloadAction<Post>) => {
        state.post = action.payload;
        state.status = 'idle';
      },
    );
    builder.addCase(getPostDetail.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export const { deleteComment } = detailPostSlice.actions;
export default detailPostSlice.reducer;
