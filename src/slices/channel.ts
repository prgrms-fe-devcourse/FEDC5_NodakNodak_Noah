import { getPostListByChannelId } from './postList/thunks';
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAnyOf,
} from '@reduxjs/toolkit';
import axiosInstance from '@/utils/customAxios';
import { Post } from '@/types/APIResponseTypes';
import { ChannelState } from '@/slices/channel/type';

const initialState: ChannelState = {
  channels: [],
  currentChannel: undefined,
  isLoading: false,
  status: 'idle',
};

export const getChannel = createAsyncThunk('channel/getChannel', async () => {
  const { data } = await axiosInstance.get('/channels');

  return data;
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
