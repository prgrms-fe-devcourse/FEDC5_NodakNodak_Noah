import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './core';

const postVote = (postId: string, comment: string) =>
  api.post({
    url: `/comments/create`,
    data: { postId, comment },
  });

const deleteComment = (commentId: string) =>
  api.delete({
    url: `/comments/delete`,
    data: { id: commentId },
  });

export const useCreateVoteAPI = (postId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (comment: string) => postVote(postId, comment),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['post-detail', postId] }),
  });

  return mutateAsync;
};

export const useDeleteCommentAPI = (postId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (commentId: string) => deleteComment(commentId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['post-detail', postId] }),
  });

  return mutateAsync;
};
