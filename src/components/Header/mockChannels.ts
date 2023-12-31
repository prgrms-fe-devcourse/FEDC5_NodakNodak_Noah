import { Channel } from '@/types/APIResponseTypes';

export const mockChannels: Pick<Channel, 'posts' | '_id' | 'name'>[] =
  Array.from({ length: 4 }, (_, i) => ({
    posts: Array.from({ length: 5 }, (_, i) => `${i}`),
    _id: `${i}`,
    name: `Channel ${i}`,
  }));
