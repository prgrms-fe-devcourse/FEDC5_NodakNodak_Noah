export interface TempPost {
  _id: string;
  fullName: string;
  image: string;
  avatar: string;
  title: string;
  count: string;
}

export interface PostCardProps {
  post: TempPost;
}

export interface PostSnippetProps {
  avatar: string;
  image: string;
  title: string;
  count: string;
  fullName: string;
}
