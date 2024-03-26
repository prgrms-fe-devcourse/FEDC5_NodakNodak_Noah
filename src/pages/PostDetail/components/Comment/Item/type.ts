export interface CommentItemProps {
  authorName: string;
  authorImage: string;
  createdAt: string;
  comment: string;
  authorId: string;
  commentId: string;
}

export interface CommentContent {
  type: string;
  content: string;
}
