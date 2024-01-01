export interface TempPost {
  fullName: string;
  avatar: string;
  _id: string;
  image: string;
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
