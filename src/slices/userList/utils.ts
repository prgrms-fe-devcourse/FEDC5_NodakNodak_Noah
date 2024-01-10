import { User } from '@/types/APIResponseTypes';
import { UserSnippet } from '@/components/Main/UserListCard/type';

export const userListToUserSnippetList = (
  userList: User[],
  myInfo?: User,
): UserSnippet[] =>
  userList.map(({ _id, fullName, image, isOnline }) => ({
    _id,
    fullName,
    isOnline,
    isFollowing: myInfo
      ? myInfo.following.some(({ user }) => user === _id) &&
        myInfo.followers.some(({ follower }) => follower === _id)
      : false,
    image,
  }));
