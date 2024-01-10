import { useSelector } from 'react-redux';

import { RootState } from '@/store';

export const useSelectedChannel = () =>
  useSelector((state: RootState) => state.channel.currentChannel);

export const useSelectedChannelLoading = () =>
  useSelector((state: RootState) => state.channel.isLoading);

export const useSelectedChannelStatus = () =>
  useSelector((state: RootState) => state.channel.status);
