import { name } from './constants';
import {
  getNotificationArray,
  seeNotifications,
  createNotification,
} from './thunk';
import { InitialState } from './notificationType';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { Comment, Notification, User } from '@/types/APIResponseTypes';

const initialState: InitialState = {
  notifications: [
    {
      seen: false,
      _id: '',
      author: {} as User,
      user: '',
      post: '',
      follow: '',
      comment: {} as Comment,
      message: '',
      createdAt: '',
      updatedAt: '',
    },
  ],
  isLoading: false,
};
const notificationSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotificationArray.fulfilled, (state, action) => {
      state.notifications = action.payload.filter(
        (notification: Notification) => !notification.seen,
      );
    });
    builder.addCase(seeNotifications.fulfilled, (state) => {
      state.notifications = state.notifications.map((notification) => {
        notification.seen = true;
        return notification;
      });
      state.notifications = state.notifications.filter(
        (notification) => !notification.seen,
      );
    });

    builder.addMatcher(
      isAnyOf(
        getNotificationArray.pending,
        seeNotifications.pending,
        createNotification.pending,
      ),
      (state) => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      isAnyOf(
        getNotificationArray.fulfilled,
        getNotificationArray.rejected,
        seeNotifications.fulfilled,
        seeNotifications.rejected,
        createNotification.fulfilled,
        createNotification.rejected,
      ),
      (state) => {
        state.isLoading = false;
      },
    );
  },
});

export default notificationSlice.reducer;
