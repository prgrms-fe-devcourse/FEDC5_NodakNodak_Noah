import { getPostListByChannelId } from './postList/thunks';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Channel, Post } from '@/types/APIResponseTypes';

interface ChannelState {
  channels: Channel[];
  currentChannel: Channel | undefined;
  isLoading: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ChannelState = {
  channels: [],
  currentChannel: undefined,
  isLoading: false,
  status: 'idle',
};

export const getChannel = createAsyncThunk('channel/getChannel', async () => {
  const response = await axios({
    url: 'https://kdt.frontend.5th.programmers.co.kr:5003/channels',
    method: 'get',
  });

  return response.data;
});

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setChannel: (state, action) => {
      const currentChannel = state.channels.find(
        (channel) => channel._id === action.payload,
      );
      state.currentChannel = currentChannel;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getChannel.fulfilled, (state, action) => {
      state.channels = action.payload;
    });
    builder.addCase(
      getPostListByChannelId.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.currentChannel = action.payload[0].channel;
      },
    );

    builder.addMatcher(
      isAnyOf(getChannel.pending, getPostListByChannelId.pending),
      (state) => {
        state.isLoading = true;
        state.status = 'loading';
      },
    );
    builder.addMatcher(
      isAnyOf(getChannel.fulfilled, getPostListByChannelId.fulfilled),
      (state) => {
        state.isLoading = false;
        state.status = 'idle';
      },
    );
    builder.addMatcher(
      isAnyOf(getChannel.rejected, getPostListByChannelId.rejected),
      (state) => {
        state.isLoading = false;
        state.status = 'failed';
      },
    );
  },
});

export const { setChannel } = channelSlice.actions;

export default channelSlice.reducer;
