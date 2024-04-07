import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export interface Comment {
  type: 'comment' | 'vote';
  content: string;
  _id: string;
}
export const useSelectedVote = () => {
  const comments = useSelector(
    (state: RootState) => state.postDetail.post.comments,
  );

  const filteredVotes = useMemo(() => {
    if (!comments) {
      return [];
    } else {
      return comments.filter((comment) => {
        const parsedComment = JSON.parse(comment.comment) as Comment;

        return parsedComment.type === 'vote';
      });
    }
  }, [comments]);

  return filteredVotes;
};
