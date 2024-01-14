import { getPostListByChannelId } from './postList/thunks';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import axiosInstance from '@/utils/customAxios';
import { Channel, Post } from '@/types/APIResponseTypes';
import { InitialState } from '@/slices/channel/type';

const initialState: InitialState = {
  channels: [],
  currentChannel: undefined,
  status: 'idle',
};

export const getChannel = createAsyncThunk('channel/getChannel', async () => {
  const { data } = await axiosInstance.get('/channels');

  return data;
});

const channelSlice = createSlice({
  name: 'channel',
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
