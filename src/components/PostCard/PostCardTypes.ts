export interface PostSnippet {
  fullName: string;
  avatar: string;
  _id: string;
  image?: string;
  title: string;
  count: string;
  userId: string;
}

export interface PostCardProps {
  post: PostSnippet;
}

export interface PostSnippetProps {
  avatar: string;
  image?: string;
  title: string;
  count: string;
  fullName?: string;
  userId?: string;
}
