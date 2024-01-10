import { createSlice } from '@reduxjs/toolkit';

const name = 'loading';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, finishLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
