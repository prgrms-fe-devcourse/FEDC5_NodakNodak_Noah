export interface User {
  coverImage: String;
  image: String;
  role: String;
  isOnline: Boolean;
  posts: Post[];
  likes: Like[];
  comments: String[];
  followers: [];
  following: [
    {
      _id: '6169e91316cb2265df003c6d';
      user: '6169e58216cb2265df003bf4';
      follower: '6169e206aa57d952c6dc1edd';
      createdAt: '2021-10-15T20:48:19.816Z';
      updatedAt: '2021-10-15T20:48:19.816Z';
      __v: 0;
    },
  ];
  notifications: Notification[];
  messages: Message[];
  _id: String;
  fullName: String;
  email: String;
  createdAt: String;
  updatedAt: String;
}

export interface Channel {
  authRequired: Boolean; // 사용되지 않음
  posts: String[];
  _id: String;
  name: String;
  description: String;
  createdAt: String;
  updatedAt: String;
}

export interface Post {
  likes: Like[];
  comments: Comment[];
  _id: String;
  image?: String;
  imagePublicId?: String;
  title: String;
  channel: Channel;
  author: User;
  createdAt: String;
  updatedAt: String;
}

export interface Like {
  _id: String;
  user: User;
  post: Post;
  createdAt: String;
  updatedAt: String;
}

export interface Comment {
  _id: String;
  comment: String;
  author: User;
  post: String; // 포스트 id
  createdAt: String;
  updatedAt: String;
}

export interface Notification {
  seen: Boolean;
  _id: String;
  author: User;
  user: User | String;
  post: String | null; // 포스트 id
  follow?: String; // 사용자 id
  comment?: Comment;
  message?: String; // 메시지 id
  createdAt: String;
  updatedAt: String;
}

export interface Follow {
  _id: String;
  user: String; // 사용자 id
  follower: String; // 사용자 id
  createdAt: String;
  updatedAt: String;
}

export interface Conversation {
  _id: String[];
  message: String;
  sender: User;
  receiver: User;
  seen: Boolean;
  createdAt: String;
}

export interface Message {
  _id: String;
  message: String;
  sender: User;
  receiver: User;
  seen: Boolean;
  createdAt: String;
  updatedAt: String;
}
