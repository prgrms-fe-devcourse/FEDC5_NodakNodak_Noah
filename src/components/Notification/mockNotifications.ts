import { Notification } from '@/types/APIResponseTypes';

export const mockNotifications: Pick<
  Notification,
  '_id' | 'user' | 'follow' | 'seen'
>[] = Array.from({
  length: 200,
}).map((_, index) => ({
  _id: index.toString(),
  user: `익명#${Math.floor(Math.random() * 100000)}`,
  follow: 'follow',
  seen: false,
}));
