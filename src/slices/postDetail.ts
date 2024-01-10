import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Post } from '@/types/APIResponseTypes';
import axiosInstance from '@/utils/customAxios';

interface DetailPost {
  post: Post;
  isLoading: boolean;
}

const initialState: DetailPost = {
  post: {} as Post,
  isLoading: false,
};

interface PostId {
  postId: string | undefined;
}
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
  reducers: {},
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

export default detailPostSlice.reducer;
