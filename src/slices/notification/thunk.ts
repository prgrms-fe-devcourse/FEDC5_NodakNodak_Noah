import { name } from './constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNotificationArray = createAsyncThunk(
  `${name}/getNotificationArray`,
  async ({ token }: { token: string }) => {
    const { data } = await axios({
      url: 'https://kdt.frontend.5th.programmers.co.kr:5003/notifications',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
);

export const seeNotifications = createAsyncThunk(
  `${name}/seenNotifications`,
  async ({ token }: { token: string }) => {
    const { data } = await axios({
      url: 'https://kdt.frontend.5th.programmers.co.kr:5003/notifications/seen',
      method: 'put',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
    const { data } = await axios({
      url: 'https://kdt.frontend.5th.programmers.co.kr:5003/notifications/create',
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: notificationData,
    });

    return data;
  },
);
