import { useDeleteLikeAPI, usePostLikeAPI } from '@/apis/postLike';

export const useLikeButton = (postId: string, likeId: string) => {
  const deleteLike = useDeleteLikeAPI(likeId, postId);
  const postLike = usePostLikeAPI(postId);

  return {
    deleteLike: async () => await deleteLike(),
    postLike: async () => await postLike(),
  };
};
