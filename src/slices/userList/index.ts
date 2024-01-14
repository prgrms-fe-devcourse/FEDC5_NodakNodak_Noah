import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { name } from '@/slices/userList/contants';
import { getUserList } from '@/slices/userList/thunk';
import { UserList } from '@/slices/userList/type';
import { initialUser } from '@/slices/initialState';
import { User } from '@/types/APIResponseTypes';

const initialState: UserList = {
  users: [initialUser],
  status: 'idle',
};

const userListSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      getUserList.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.status = 'idle';
      },
    );
    builder.addCase(getUserList.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default userListSlice.reducer;
