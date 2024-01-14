import { User } from '@/types/APIResponseTypes';
import { StatusType } from '@/slices/type';

export interface FollowData {
  followId?: string;
  isFollowing: boolean;
  isFollower: boolean;
}

export interface InitialState {
  targetUser: User;
  followData: FollowData;
  status: StatusType;
}
