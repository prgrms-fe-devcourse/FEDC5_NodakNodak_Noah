import { createAsyncThunk } from '@reduxjs/toolkit';

import { name } from '@/slices/constants';
import axiosInstance from '@/utils/customAxios';
import { CreateNotificationData } from '@/slices/notification/type';

export const getNotificationArray = createAsyncThunk(
  `${name.notification}/getNotificationArray`,
  async () => {
    const { data } = await axiosInstance.get('/notifications');

    return data;
  },
);

export const seeNotifications = createAsyncThunk(
  `${name.notification}/seenNotifications`,
  async () => {
    const { data } = await axiosInstance.put('/notifications/seen');

    return data;
  },
);

export const createNotification = createAsyncThunk(
  `${name.notification}/createNotification`,
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
