import { User } from '@/types/APIResponseTypes';

export const userToUserSnippet = (user: User, myInfo?: User) => {
  if (!user) {
    return null;
  }

  const { _id, fullName, image, isOnline } = user;

  return {
    _id,
    fullName,
    isOnline,
    isFollowing: myInfo
      ? myInfo.following.some(({ user }) => user === _id) &&
        myInfo.followers.some(({ follower }) => follower === _id)
      : false,
    image,
  };
};
