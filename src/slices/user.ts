import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '@/types/APIResponseTypes';

interface UserInfo {
  users: User[];
  currentUser: User | undefined;
  isLoading: boolean;
}

const initialState: UserInfo = {
  users: [],
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

export const userInfo = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const currentUser = state.users.find(
        (user) => user._id === action.payload,
      );
      state.currentUser = currentUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setUser } = userInfo.actions;

export default userInfo.reducer;
