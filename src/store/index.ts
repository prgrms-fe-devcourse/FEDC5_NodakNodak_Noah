import { useDispatch as reduxUseDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '@/slices/channel';
import postDetailReducer from '@/slices/postDetail';

const store = configureStore({
  reducer: { channel: channelReducer, postDetail: postDetailReducer },
});
type AppDispatch = typeof store.dispatch;
export const useDispatch = () => reduxUseDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
