import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getNotificationArray,
  seeNotifications,
  createNotification,
} from '@/slices/notification/thunk';
import { InitialState, NotificationWithType } from '@/slices/notification/type';
import { SLICE_NAME } from '@/slices/constants';
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
  status: 'idle',
};
const notificationSlice = createSlice({
  name: SLICE_NAME.NOTIFICATION,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getNotificationArray.fulfilled,
      (state, action: PayloadAction<NotificationWithType[]>) => {
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
      },
    );
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
        state.status = 'loading';
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
        state.status = 'idle';
      },
    );
  },
});

export default notificationSlice.reducer;
