import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusState, SetFetchingStatePayload } from '@/slices/status/type';

const name = 'status';

const initialState: StatusState = {} as StatusState;

const statusSlice = createSlice({
  name,
  initialState,
  reducers: {
    setFetchingState: (
      state,
      action: PayloadAction<SetFetchingStatePayload>,
    ) => {
      const { url, method } = action.payload;
      state[`${method}_${url}`] = action.payload.state;
    },
  },
});

export const { setFetchingState } = statusSlice.actions;

export default statusSlice.reducer;
