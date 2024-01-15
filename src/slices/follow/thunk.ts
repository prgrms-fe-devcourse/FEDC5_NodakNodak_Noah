import { createAsyncThunk } from '@reduxjs/toolkit';
import { name } from '@/slices/constants';
import { getPostListByMyId } from '@/slices/postList/thunks';
import { createNotification } from '@/slices/notification/thunk';
import { CreateNotificationData } from '@/slices/notification/type';
import { RootState } from '@/store';
import axiosInstance from '@/utils/customAxios';

export const follow = createAsyncThunk(
  `${name.follow}/follow`,
  async (
    {
      myId,
      userId,
    }: {
      myId: string;
      userId: string;
    },
    { getState, dispatch },
  ) => {
    const state = getState() as RootState;
    const myInfo = state.userInfo.authUser;

    if (!myInfo || myInfo._id !== myId) return;
    const { data } = await axiosInstance.post('/follow/create', { userId });

    const notificationData: CreateNotificationData = {
      notificationType: 'FOLLOW',
      notificationTypeId: data._id,
      userId,
      postId: null,
    };

    dispatch(getPostListByMyId());
    dispatch(
      createNotification({
        notificationData,
      }),
    );

    return data;
  },
);

export const unfollow = createAsyncThunk(
  `${name.follow}/unfollow`,
  async (
    {
      myId,
      followId,
    }: {
      myId: string;
      followId: string;
    },
    { getState, dispatch },
  ) => {
    const state = getState() as RootState;
    const myInfo = state.userInfo.authUser;

    if (!myInfo || myInfo._id !== myId) return;

    const { data } = await axiosInstance.delete(`/follow/delete`, {
      data: {
        id: followId,
      },
    });
    dispatch(getPostListByMyId());

    return data;
  },
);
