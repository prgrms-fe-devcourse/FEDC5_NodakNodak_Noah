import { StatusType } from '@/slices/type';
import { Channel } from '@/types/APIResponseTypes';

export interface InitialState {
  channels: Channel[];
  currentChannel?: Channel;
  status: StatusType;
}
