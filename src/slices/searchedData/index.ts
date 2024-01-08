import { name } from './constants';
import { searchAllData, searchUserData } from './thunk';
import { SearchedPost, SearchedData } from './searchedDataType';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { User } from '@/types/APIResponseTypes';

const initialState: SearchedData = {
  postData: [] as SearchedPost[],
  userData: [] as User[],
  isLoading: false,
};

export const searchedDataSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchAllData.fulfilled, (state, action) => {
      state.postData = action.payload;
    });
    builder.addCase(searchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
    });

    builder.addMatcher(
      isAnyOf(searchAllData.pending, searchUserData.pending),
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      isAnyOf(
        searchAllData.fulfilled,
        searchUserData.fulfilled,
        searchAllData.rejected,
        searchUserData.rejected,
      ),
      (state) => {
        state.isLoading = false;
      },
    );
  },
});

export default searchedDataSlice.reducer;
