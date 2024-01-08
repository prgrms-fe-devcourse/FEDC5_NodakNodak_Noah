import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelectedPost } from '@/pages/DetailPage/useSelectedPost';
import LikeButtonIcon from '@/assets/LikeButtonIcon';

interface LikeButtonProps {
  postId: string | undefined;
  userId: string | undefined;
}

const LikeButton = ({ postId, userId }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [likeNumber, setLikeNumber] = useState(0);
  const BASE_URL = 'https://kdt.frontend.5th.programmers.co.kr:5003';

  const postDetail = useSelectedPost();
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
      const token = localStorage.getItem('auth-token');
      const { data } = await axios({
        url: `${BASE_URL}/likes/${likeUrl}`,
        method: isLiked ? 'DELETE' : 'POST',
        data: isLiked ? { id: likeId } : { postId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
