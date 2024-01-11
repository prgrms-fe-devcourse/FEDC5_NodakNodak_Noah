import { createSlice } from '@reduxjs/toolkit';
import { name } from '@/slices/userList/contants';
import { getUserList } from '@/slices/userList/thunk';
import { UserList } from '@/slices/userList/type';

const initialState: UserList = {
  users: [],
  isLoading: false,
};

export const userListSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUserList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default userListSlice.reducer;
