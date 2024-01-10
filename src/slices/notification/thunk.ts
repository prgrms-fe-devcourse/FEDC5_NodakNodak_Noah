import { name } from './constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/utils/customAxios';

export const getNotificationArray = createAsyncThunk(
  `${name}/getNotificationArray`,
  async ({ token }: { token: string }) => {
    const { data } = await axiosInstance.get('/notifications');

    return data;
  },
);

export const seeNotifications = createAsyncThunk(
  `${name}/seenNotifications`,
  async ({ token }: { token: string }) => {
    const { data } = await axiosInstance.put('/notifications/seen');

    return data;
  },
);

export interface CreateNotificationData {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}

export const createNotification = createAsyncThunk(
  `${name}/createNotification`,
  async ({
    token,
    notificationData,
  }: {
    token: string;
    notificationData: CreateNotificationData;
  }) => {
    const { data } = await axiosInstance.post(
      '/notifications/create',
      notificationData,
    );

    return data;
  },
);
