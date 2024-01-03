import { User } from '@/types/APIResponseTypes';
import { UserSnippet } from '@/components/UserListCard/UserListCardTypes';

export const userListToUserSnippetList = (userList: User[]): UserSnippet[] =>
  userList.map(({ _id, fullName, image, isOnline }) => ({
    _id,
    fullName,
    isOnline,
    isFollowing: false,
    image,
  }));
