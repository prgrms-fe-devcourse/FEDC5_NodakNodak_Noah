import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getNotificationArray,
  seeNotifications,
  createNotification,
} from '@/slices/notification/thunk';
import { InitialState } from '@/slices/notification/type';
import { name } from '@/slices/notification/constants';
import { Notification } from '@/types/APIResponseTypes';

const initialState: InitialState = {
  notifications: [],
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
      state.notifications = [];
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
