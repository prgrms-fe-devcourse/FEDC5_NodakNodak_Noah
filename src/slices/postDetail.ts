import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '@/types/APIResponseTypes';

interface DetailPost {
  post: Post;
  isLoading: boolean;
}

const initialState: DetailPost = {
  post: {} as Post,
  isLoading: false,
};

export const getPostDetail = createAsyncThunk(
  'detailPost/getPostDetail',
  async () => {
    const response = await axios({
      url: 'https://kdt.frontend.5th.programmers.co.kr:5003/posts/6592c80a2a48542ca963b86d',
      method: 'get',
    });

    return response.data;
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
