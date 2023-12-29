import { TempPost } from '@/types/PostCardTypes';

export const mockPosts: TempPost[] = Array.from({ length: 100 }).map(
  (_, index) => ({
    _id: index.toString(),
    count: Math.floor(Math.random() * 100).toString(),
    image: `https://picsum.photos/300/200?a=${index}`,
    title: `i am title ${index}`,
    fullName: `i am author' ${index}`,
    avatar: `https://i.pravatar.cc/300?a=${index}`,
  }),
);
