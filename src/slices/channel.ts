import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Channel } from '@/types/APIResponseTypes';

interface ChannelState {
  channels: Channel[];
  currentChannel: Channel | undefined;
  isLoading: boolean;
}

const initialState: ChannelState = {
  channels: [],
  currentChannel: undefined,
  isLoading: false,
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
    builder.addCase(getChannel.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getChannel.fulfilled, (state, action) => {
      state.channels = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getChannel.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setChannel } = channelSlice.actions;

export default channelSlice.reducer;
