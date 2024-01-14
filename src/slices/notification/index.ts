import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getNotificationArray,
  seeNotifications,
  createNotification,
} from '@/slices/notification/thunk';
import { InitialState } from '@/slices/notification/type';
import { name } from '@/slices/notification/constants';
import { Notification } from '@/types/APIResponseTypes';

export const notificationType = {
  follow: 'FOLLOW',
  comment: 'COMMENT',
  message: 'MESSAGE',
  like: 'LIKE',
  vote: 'VOTE',
  notdefined: 'NOTDEFINED',
};

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

      state.notifications = state.notifications.map((notification) => {
        if (notification.post) {
          if (notification.comment) {
            if (JSON.parse(notification.comment.comment).type === 'vote')
              notification.type = notificationType.vote;
            else notification.type = notificationType.comment;
          } else if (notification.message) {
            notification.type = notificationType.message;
          } else {
            notification.type = notificationType.like;
          }
        } else if (notification.follow) {
          notification.type = notificationType.follow;
        } else if (notification.author) {
          notification.type = notificationType.notdefined;
        }
        return notification;
      });
    });
    builder.addCase(seeNotifications.fulfilled, (state) => {
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
