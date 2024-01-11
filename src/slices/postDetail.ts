import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Post } from '@/types/APIResponseTypes';
import axiosInstance from '@/utils/customAxios';
import { DetailPost, PostId } from '@/slices/postDetail/type';

const initialState: DetailPost = {
  post: {} as Post,
  isLoading: false,
};

export const getPostDetail = createAsyncThunk(
  'detailPost/getPostDetail',
  async ({ postId }: PostId) => {
    const { data } = await axiosInstance.get(`/posts/${postId}`);

    return data;
  },
);

export const detailPostSlice = createSlice({
  name: 'detailPost',
  initialState,
  reducers: {
    deleteComment: (state, action) => {
      const commentId = action.payload;
      const commentIndex = state.post.comments.findIndex(
        (comment) => comment._id === commentId,
      );
      state.post.comments.splice(commentIndex, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostDetail.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPostDetail.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { deleteComment } = detailPostSlice.actions;
export default detailPostSlice.reducer;
