import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from './core';

const postLike = (postId: string) =>
  api.post({
    url: `/likes/create`,
    data: { postId },
  });

const deleteLike = (likeId: string) =>
  api.delete({
    url: `/likes/delete`,
    data: { id: likeId },
  });

export const usePostLikeAPI = (postId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => postLike(postId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['post-detail', postId] }),
  });

  return mutateAsync;
};

export const useDeleteLikeAPI = (likeId: string, postId: string) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteLike(likeId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['post-detail', postId] }),
  });

  return mutateAsync;
};
