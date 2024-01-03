import { useDispatch as reduxUseDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '@/slices/channel';
import userInfoReducer from '@/slices/user';
import postDetailReducer from '@/slices/postDetail';

const store = configureStore({
  reducer: { channel: channelReducer, postDetail: postDetailReducer, userInfo: userInfoReducer },
});
type AppDispatch = typeof store.dispatch;
export const useDispatch = () => reduxUseDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
