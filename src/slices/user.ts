import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/types/APIResponseTypes';

interface UserInfo {
  currentUser: User | undefined;
  isLoading: boolean;
}

const initialState: UserInfo = {
  currentUser: undefined,
  isLoading: false,
};

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await axios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/users/65870847b035721f23358062',
    method: 'get',
  });

  return response.data;
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (updateData) => {
    const response = await axios.put(
      'https://kdt.frontend.5th.programmers.co.kr:5003/users/65870847b035721f23358062',
      updateData,
    );

    return response.data;
  },
);

export const userInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userInfo.reducer;
