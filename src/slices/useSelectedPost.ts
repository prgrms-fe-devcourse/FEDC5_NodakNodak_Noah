import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const useSelectedPost = () =>
  useSelector((state: RootState) => state.postDetail.post);

export const useSelectedPostTitle = () => {
  const selectedPost = useSelectedPost();
  console.log(1, selectedPost);
  if (selectedPost && selectedPost.title) {
    try {
      const parsedTitle = JSON.parse(selectedPost.title);
      if (parsedTitle) {
        return parsedTitle;
      }
    } catch (error) {
      console.error('Error parsing title JSON:', error);
    }
  }
  return null;
};
