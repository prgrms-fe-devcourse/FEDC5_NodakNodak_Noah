import { Channel } from '@/types/APIResponseTypes';

export interface ChannelState {
  channels: Channel[];
  currentChannel: Channel | undefined;
  isLoading: boolean;
  status: 'idle' | 'loading' | 'failed';
}
