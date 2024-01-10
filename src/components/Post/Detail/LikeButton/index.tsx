import { useState, useEffect } from 'react';

import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';
import LikeButtonIcon from '@/assets/LikeButtonIcon';
import axiosInstance from '@/utils/customAxios';

interface LikeButtonProps {
  postId: string | undefined;
  userId: string | undefined;
}

const LikeButton = ({ postId, userId }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [likeNumber, setLikeNumber] = useState(0);

  const postDetail = useSelectedPostDetail();
  const likesDetail = postDetail.likes;
  useEffect(() => {
    if (likesDetail) {
      const likedByUser = likesDetail.some((like) => {
        if (typeof like.user === 'string' && like.user === userId) {
          setLikeId(like._id);
          return true;
        }
        return false;
      });
      setIsLiked(likedByUser);
      setLikeNumber(likesDetail.length);
    }
  }, [likesDetail, userId]);

  const handleLikeToggle = async () => {
    const likeUrl = isLiked ? 'delete' : 'create';
    setLikeNumber((prevLikeNumber) =>
      isLiked ? prevLikeNumber - 1 : prevLikeNumber + 1,
    );

    try {
      const { data } = await axiosInstance({
        url: `likes/${likeUrl}`,
        method: isLiked ? 'DELETE' : 'POST',
        data: isLiked ? { id: likeId } : { postId },
      });
      setLikeId(data._id);
      setIsLiked((prevIsLiked) => !prevIsLiked);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <LikeButtonIcon
      onClick={handleLikeToggle}
      isLiked={isLiked}
      likesNumber={likeNumber}
    />
  );
};

export default LikeButton;
