import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/common/Button';
import useTimeoutFn from '@/hooks/useTimeoutFn';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedFollowData } from '@/hooks/useSelectedFollowData';
import { unfollow, follow } from '@/slices/follow/thunk';
import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user';

const FollowButton = () => {
  const userId = useParams().userId!;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myInfo = useSelectedMyInfo();
  const token = localStorage.getItem('auth-token');
  const { isFollowing, followId } = useSelectedFollowData();
  const [isFollowingUi, setIsFollowingUi] = useState(false);

  const debouncedFollow = useTimeoutFn(() => {
    handleFollow();
  }, 1000);

  const isMyPage = userId === myInfo?._id;

  const textMap = {
    myPage: '프로필 수정',
    following: '언팔로우',
    none: '팔로우',
  };

  const buttonText = isMyPage
    ? textMap.myPage
    : isFollowingUi
      ? textMap.following
      : textMap.none;

  const handleFollow = () => {
    if (!myInfo || !token) {
      alert('로그인이 필요합니다.');
      return;
    }
    if (isFollowing && followId) {
      dispatch(unfollow({ myId: myInfo._id, followId }));
    } else {
      dispatch(follow({ myId: myInfo._id, userId }));
    }
  };

  const handleFollowUi = () => {
    if (!myInfo || !token) {
      alert('로그인이 필요합니다.');
      return;
    }
    if (isFollowingUi && followId) {
      setIsFollowingUi(false);
    } else {
      setIsFollowingUi(true);
    }
    debouncedFollow();
  };

  const handleMyPage = () => {
    if (!myInfo || !token) {
      alert('로그인이 필요합니다.');
      return;
    }
    navigate('setting', { state: myInfo.image });
  };

  const handleClick = isMyPage ? handleMyPage : handleFollowUi;

  useEffect(() => {
    if (!token) return;
    dispatch(getMyInfo());
  }, [dispatch, token]);

  useEffect(() => {
    setIsFollowingUi(isFollowing);
  }, [isFollowing]);

  const styleType = isFollowingUi ? 'danger' : 'primary';

  return (
    <Button styleType={styleType} onClick={handleClick}>
      {buttonText}
    </Button>
  );
};

export default FollowButton;
