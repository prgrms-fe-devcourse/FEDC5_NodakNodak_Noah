import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as reduxUseDispatch } from 'react-redux';
import channelReducer from '@/slices/channel';
import followReducer from '@/slices/follow';
import notificationReducer from '@/slices/notification';
import postDetailReducer from '@/slices/postDetail';
import postListReducer from '@/slices/postList';
import searchedDataReducer from '@/slices/searchedData';
import userInfoReducer from '@/slices/user';
import userListReducer from '@/slices/userList';

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
  },
});
type AppDispatch = typeof store.dispatch;
export const useDispatch = () => reduxUseDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
