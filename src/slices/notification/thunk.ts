import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@/slices/constants';
import { CreateNotificationData } from '@/slices/notification/type';
import axiosInstance from '@/utils/customAxios';

export const getNotificationArray = createAsyncThunk(
  `${SLICE_NAME.NOTIFICATION}/getNotificationArray`,
  async () => {
    const { data } = await axiosInstance.get('/notifications');

    return data;
  },
);

export const seeNotifications = createAsyncThunk(
  `${SLICE_NAME.NOTIFICATION}/seenNotifications`,
  async () => {
    const { data } = await axiosInstance.put('/notifications/seen');

    return data;
  },
);

export const createNotification = createAsyncThunk(
  `${SLICE_NAME.NOTIFICATION}/createNotification`,
  async ({
    notificationData,
  }: {
    notificationData: CreateNotificationData;
  }) => {
    const { data } = await axiosInstance.post(
      '/notifications/create',
      notificationData,
    );

    return data;
  },
);
