import { useDeletePostAPI } from '@/apis/posts';

export const useDeletePost = (postId: string) => {
  const deletePost = useDeletePostAPI(postId);

  return async () => await deletePost();
};
