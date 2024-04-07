import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import { initialUser } from '@/slices/initialState';
import { getUserList } from '@/slices/userList/thunk';
import { UserList } from '@/slices/userList/type';
import { User } from '@/types/APIResponseTypes';

const initialState: UserList = {
  users: [initialUser],
  status: 'idle',
};

const userListSlice = createSlice({
  name: SLICE_NAME.USER_LIST,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state) => {
      state.status = 'loading';
      state.users = [initialUser];
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
