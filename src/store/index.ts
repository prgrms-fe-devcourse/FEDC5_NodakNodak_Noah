import { useDispatch as reduxUseDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import followReducer from '@/slices/follow';
import userInfoReducer from '@/slices/user';
import channelReducer from '@/slices/channel';
import loadingReducer from '@/slices/loading';
import postListReducer from '@/slices/postList';
import userListReducer from '@/slices/userList';
import postDetailReducer from '@/slices/postDetail';
import notificationReducer from '@/slices/notification';
import searchedDataReducer from '@/slices/searchedData';

const store = configureStore({
  reducer: {
    channel: channelReducer,
    postDetail: postDetailReducer,
    postList: postListReducer,
    userList: userListReducer,
    userInfo: userInfoReducer,
    notification: notificationReducer,
    follow: followReducer,
    searchedData: searchedDataReducer,
    loading: loadingReducer,
  },
});
type AppDispatch = typeof store.dispatch;
export const useDispatch = () => reduxUseDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
