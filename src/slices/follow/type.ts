import { StatusType } from '@/slices/type';
import { User } from '@/types/APIResponseTypes';

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
