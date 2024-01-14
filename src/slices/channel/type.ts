import { Channel } from '@/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export interface InitialState {
  channels: Channel[];
  currentChannel?: Channel;
  status: StatusType;
}
