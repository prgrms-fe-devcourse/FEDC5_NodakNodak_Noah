import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedPost = () =>
  useSelector((state: RootState) => state.postDetail.post);

export const useSelectedPostTitle = () => {
  const selectedPost = useSelectedPost();
  if (selectedPost && selectedPost.title) {
    const parsedTitle = JSON.parse(selectedPost.title);
    if (parsedTitle) {
      return parsedTitle;
    }
  }
  return null;
};
