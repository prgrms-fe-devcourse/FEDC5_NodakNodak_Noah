import { PostSnippet } from '@/components/PostCard/PostCardTypes';
import { Post } from '@/types/APIResponseTypes';

export const postListToPostSnippetList = (postList: Post[]): PostSnippet[] => {
  const postSnippetList = postList.map(
    ({ author, _id, image, title, comments }) => ({
      fullName: author.fullName,
      avatar: author.image,
      _id,
      image,
      title: JSON.parse(title).title,
      count: comments.length.toString(),
    }),
  );

  return postSnippetList;
};
