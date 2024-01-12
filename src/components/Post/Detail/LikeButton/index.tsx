import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';
import LikeButtonIcon from '@/assets/LikeButtonIcon';
import axiosInstance from '@/utils/customAxios';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useDispatch } from '@/store';
import { createNotification } from '@/slices/notification/thunk';
import { CreateNotificationData } from '@/slices/notification/type';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [likeNumber, setLikeNumber] = useState(0);

  const postDetail = useSelectedPostDetail();
  const likesDetail = postDetail.likes;

  const myInfo = useSelectedMyInfo();
  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (likesDetail) {
      const likedByUser = likesDetail.some((like) => {
        if (typeof like.user === 'string' && like.user === myInfo?._id) {
          setLikeId(like._id);
          return true;
        }
        return false;
      });
      setIsLiked(likedByUser);
      setLikeNumber(likesDetail.length);
    }
  }, [likesDetail, myInfo]);

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

      if (isLiked) return;
      const notificationData: CreateNotificationData = {
        notificationType: 'LIKE',
        notificationTypeId: data._id,
        postId: postId ? postId : null,
        userId: postDetail.author._id,
      };
      dispatch(createNotification({ notificationData }));
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
