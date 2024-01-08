import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedNotifications = () =>
  useSelector((state: RootState) => state.notification.notifications);
