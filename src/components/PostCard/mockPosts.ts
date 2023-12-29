import { TempPost } from './tempType';

export const mockPosts: TempPost[] = Array.from({ length: 40 }).map(
  (_, index) => ({
    count: Math.floor(Math.random() * 100).toString(),
    image: `https://picsum.photos/300/200?a=${index}`,
    title: `i am title ${index}`,
    fullName: `i am author' ${index}`,
    avatar: `https://i.pravatar.cc/300?a=${index}`,
  }),
);
