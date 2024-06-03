import { useCreateVoteAPI, useDeleteCommentAPI } from '@/apis/comment';

export const useCommentAPI = (postId: string) => {
  const createVote = useCreateVoteAPI(postId);
  const deleteComment = useDeleteCommentAPI(postId);

  return {
    createComment: async (comment: string) => await createVote(comment),
    deleteComment: async (commentId: string) => await deleteComment(commentId),
  };
};
