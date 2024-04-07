import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import { initialPost } from '@/slices/initialState';
import { getPostDetail } from '@/slices/postDetail/thunk';
import { InitialState } from '@/slices/postDetail/type';
import { Post } from '@/types/APIResponseTypes';

const initialState: InitialState = {
  post: initialPost,
  status: 'idle',
};

const detailPostSlice = createSlice({
  name: SLICE_NAME.DETAIL_POST,
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
      state.post = initialPost;
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
