import { useParams } from 'react-router-dom';
import { Like, User } from '@/apis/responseModel';
import LikeButtonIcon from '@/assets/LikeButtonIcon';
import { useLikeButton } from '../../hooks/useLikeButton';

interface LikeButtonProps {
  likes: Like[];
  myInfo: User;
}

const LikeButton = ({ likes, myInfo }: LikeButtonProps) => {
  const myLiked = likes.filter((like) => like.user === myInfo._id);
  const { postId } = useParams() as { postId: string };
  const { deleteLike, postLike } = useLikeButton(postId, myLiked[0]?._id);
  const handleLikeButtonClick = () => {
    if (myLiked.length > 0) {
      deleteLike();
    } else {
      postLike();
    }
  };

  return (
    <LikeButtonIcon
      onClick={handleLikeButtonClick}
      isLiked={myLiked.length > 0}
      likesNumber={likes.length}
    />
  );
};

export default LikeButton;
