import { SearchedPost } from '@/slices/searchedData/type';
import {
  Channel,
  Comment,
  Conversation,
  Follow,
  Like,
  Message,
  Notification,
  Post,
  User,
} from '@/types/APIResponseTypes';

export const initialTitle = `{"title":"","content":"","voteTitle":"","voteArray":[""]}`;
export const initialCustomComment = `{"type":"","content":""}`;

export const initialUser: User = {
  coverImage: '',
  image: '',
  role: '',
  isOnline: false,
  posts: [],
  likes: [],
  comments: [],
  followers: [{ follower: '' }],
  following: [
    { _id: '', user: '', follower: '', createdAt: '', updatedAt: '', __v: 0 },
  ],
  notifications: [],
  messages: [],
  _id: '',
  fullName: '',
  username: '',
  email: '',
  createdAt: '',
  updatedAt: '',
};

export const initialChannel: Channel = {
  authRequired: false,
  posts: [],
  _id: '',
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

export const initialPost: Post = {
  avatar: '',
  likes: [],
  comments: [],
  _id: '',
  image: '',
  imagePublicId: '',
  title: initialTitle,
  channel: initialChannel,
  author: initialUser,
  createdAt: '',
  updatedAt: '',
};

export const initialSearchedPost: SearchedPost = {
  likes: [],
  comments: [],
  _id: '',
  title: initialTitle,
  author: initialUser,
  createdAt: '',
  updatedAt: '',
  image: '',
};
export const initialLike: Like = {
  _id: '',
  user: initialUser,
  post: initialPost,
  createdAt: '',
  updatedAt: '',
};

export const initialFollow: Follow = {
  _id: '',
  user: '',
  follower: '',
  createdAt: '',
  updatedAt: '',
};

export const initialCoversation: Conversation = {
  _id: [],
  message: '',
  sender: initialUser,
  receiver: initialUser,
  seen: false,
  createdAt: '',
};

export const initialMessage: Message = {
  _id: '',
  message: '',
  sender: initialUser,
  receiver: initialUser,
  seen: false,
  createdAt: '',
  updatedAt: '',
};

export const initialComment: Comment = {
  _id: '',
  comment: initialCustomComment,
  author: initialUser,
  post: '',
  createdAt: '',
  updatedAt: '',
};

export const initialNotification: Notification & { type: string } = {
  seen: false,
  _id: '',
  author: initialUser,
  user: initialUser,
  post: null,
  follow: initialFollow,
  comment: initialComment,
  message: '',
  createdAt: '',
  updatedAt: '',
  type: 'COMMENT',
};
