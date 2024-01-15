import { useEffect } from 'react';

import { useDispatch } from '@/store';
import {
  useSelectedMyInfo,
  useSelectedMyInfoLoading,
} from '@/hooks/useSelectedMyInfo';
import {
  useSelectedUserList,
  useSelectedUserListLoading,
} from '@/hooks/useSelectedUserList';
import useInterval from '@/hooks/useInterval';
import { getMyInfo } from '@/slices/user/thunk';
import { getUserList } from '@/slices/userList/thunk';

const useGetUserList = () => {
  const token = localStorage.getItem('auth-token');
  const dispatch = useDispatch();
  const myInfo = useSelectedMyInfo();
  const userList = useSelectedUserList();

  const isLoadingUserList = useSelectedUserListLoading();
  const isLoadingMyInfo = useSelectedMyInfoLoading();

  const isLoading = isLoadingUserList || isLoadingMyInfo;

  useEffect(() => {
    dispatch(getUserList());
    if (!token) return;
    dispatch(getMyInfo());
  }, [dispatch, token]);

  useInterval(() => {
    dispatch(getUserList());
  }, 60000);

  const userSnippetList = userList.map(
    ({ _id, fullName, image, isOnline }) => ({
      _id,
      fullName,
      isOnline,
      isFollowing: myInfo
        ? myInfo.following.some(({ user }) => user === _id) &&
          myInfo.followers.some(({ follower }) => follower === _id)
        : false,
      image,
    }),
  );

  return { isLoading, userSnippetList };
};

export default useGetUserList;
