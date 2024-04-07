import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LikeButtonIcon from '@/assets/LikeButtonIcon';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';
import useTimeoutFn from '@/hooks/useTimeoutFn';
import { createNotification } from '@/slices/notification/thunk';
import { CreateNotificationData } from '@/slices/notification/type';
import { useDispatch } from '@/store';
import axiosInstance from '@/utils/customAxios';

export interface LikeButtonProps {
  postId: string | undefined;
  userId: string | undefined;
}

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState('');
  const [isLikedUi, setIsLikedUi] = useState(false);
  const [likeNumberUi, setLikeNumberUi] = useState(0);

  const postDetail = useSelectedPostDetail();
  const likesDetail = postDetail.likes;

  const myInfo = useSelectedMyInfo();
  const { postId } = useParams();
  const dispatch = useDispatch();

  const debouncedHandleLikeToggle = useTimeoutFn(() => {
    handleLikeToggle();
  }, 1000);

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
      setIsLikedUi(likedByUser);
      setLikeNumberUi(likesDetail.length);
    }
  }, [likesDetail, myInfo]);

  const handleLikeToggle = async () => {
    if (isLiked === isLikedUi) return;
    const likeUrl = isLiked ? 'delete' : 'create';

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

  const handleLikeToggleUi = () => {
    if (!myInfo) {
      alert('로그인이 필요합니다.');
      return;
    }
    setIsLikedUi((prevIsLiked) => !prevIsLiked);
    setLikeNumberUi((prevLikeNumber) =>
      isLikedUi ? prevLikeNumber - 1 : prevLikeNumber + 1,
    );
    debouncedHandleLikeToggle();
  };

  return (
    <LikeButtonIcon
      onClick={handleLikeToggleUi}
      isLiked={isLikedUi}
      likesNumber={likeNumberUi}
    />
  );
};

export default LikeButton;
