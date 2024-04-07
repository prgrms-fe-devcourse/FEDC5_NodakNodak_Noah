import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import { createNotification } from '@/slices/notification/thunk';
import { CreateNotificationData } from '@/slices/notification/type';
import { getPostListByMyId } from '@/slices/postList/thunks';
import { RootState } from '@/store';
import axiosInstance from '@/utils/customAxios';

export const follow = createAsyncThunk(
  `${SLICE_NAME.FOLLOW}/follow`,
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
  `${SLICE_NAME.FOLLOW}/unfollow`,
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
