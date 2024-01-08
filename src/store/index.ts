import { useDispatch as reduxUseDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '@/slices/channel';
import userInfoReducer from '@/slices/user';
import postDetailReducer from '@/slices/postDetail';
import postListReducer from '@/slices/postList';
import userListReducer from '@/slices/userList';
import followReducer from '@/slices/follow';
import searchedDataReducer from '@/slices/searchedData';

const store = configureStore({
  reducer: {
    channel: channelReducer,
    postDetail: postDetailReducer,
    postList: postListReducer,
    userList: userListReducer,
    userInfo: userInfoReducer,
    follow: followReducer,
    searchedData: searchedDataReducer,
  },
});
type AppDispatch = typeof store.dispatch;
export const useDispatch = () => reduxUseDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
