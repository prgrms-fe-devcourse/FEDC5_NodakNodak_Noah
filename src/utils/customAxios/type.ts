export type AllUrlList =
  | '/channels/create'
  | '/login'
  | '/signup'
  | '/logout'
  | '/auth-user'
  | '/users/get-users'
  | '/users/online-users'
  | '/users/'
  | '/users/upload-photo'
  | '/settings/update-user'
  | '/settings/update-password'
  | '/channels'
  | '/channel/'
  | '/posts/channel/'
  | '/posts/author/'
  | '/posts/create'
  | '/posts/'
  | '/posts'
  | '/posts/update'
  | '/posts/delete'
  | '/likes/create'
  | '/likes/delete'
  | '/comments/create'
  | '/comments/delete'
  | '/notifications'
  | '/notifications/seen'
  | '/notifications/create'
  | '/follow/create'
  | '/follow/delete'
  | '/messages/conversations'
  | '/messages'
  | '/messages/create'
  | '/messages/update-seen'
  | '/search/users/'
  | '/search/all/';

export type Methods = 'get' | 'post' | 'put' | 'delete';
