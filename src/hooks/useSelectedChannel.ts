import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useSelectedChannel = () =>
  useSelector((state: RootState) => state.channel.currentChannel);

export const useSelectedChannelLoading = () =>
  useSelector((state: RootState) => state.channel.status === 'loading');

export const useSelectedChannels = () =>
  useSelector((state: RootState) => state.channel.channels);
