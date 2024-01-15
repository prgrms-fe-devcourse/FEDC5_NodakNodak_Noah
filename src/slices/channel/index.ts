import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';

import { Channel, Post } from '@/types/APIResponseTypes';
import { getPostListByChannelId } from '@/slices/postList/thunks';
import { InitialState } from '@/slices/channel/type';
import { getChannel } from '@/slices/channel/thunk';
import { SLICE_NAME } from '@/slices/constants';

const initialState: InitialState = {
  channels: [],
  currentChannel: undefined,
  status: 'idle',
};

const channelSlice = createSlice({
  name: SLICE_NAME.CHANNEL,
  initialState,
  reducers: {
    setChannel: (state, action: PayloadAction<string>) => {
      const currentChannel = state.channels.find(
        (channel) => channel._id === action.payload,
      );
      state.currentChannel = currentChannel;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getChannel.fulfilled,
      (state, action: PayloadAction<Channel[]>) => {
        state.channels = action.payload;
      },
    );
    builder.addCase(
      getPostListByChannelId.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.currentChannel = action.payload[0].channel;
      },
    );

    builder.addMatcher(
      isAnyOf(getChannel.pending, getPostListByChannelId.pending),
      (state) => {
        state.status = 'loading';
      },
    );
    builder.addMatcher(
      isAnyOf(getChannel.fulfilled, getPostListByChannelId.fulfilled),
      (state) => {
        state.status = 'idle';
      },
    );
    builder.addMatcher(
      isAnyOf(getChannel.rejected, getPostListByChannelId.rejected),
      (state) => {
        state.status = 'failed';
      },
    );
  },
});

export const { setChannel } = channelSlice.actions;

export default channelSlice.reducer;
