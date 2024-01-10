import { SearchedPost } from '../searchedData/searchedDataType';
import { PostSnippet } from '@/components/Main/PostCard/type';
import { Post } from '@/types/APIResponseTypes';

export const postListToPostSnippetList = (
  postList: Array<SearchedPost | Post>,
): PostSnippet[] =>
  postList.map(({ author, _id, image, title, comments }) => {
    const count = comments
      .filter((comment) => {
        const parsedComment = JSON.parse(comment.comment);

        return parsedComment.type === 'vote';
      })
      .length.toString();

    return {
      fullName: author.fullName,
      avatar: author.image,
      userId: author._id,
      _id,
      image,
      title: JSON.parse(title).title,
      count,
    };
  });
