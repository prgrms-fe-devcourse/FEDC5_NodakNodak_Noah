import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/Common/Button';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedFollowData } from '@/hooks/useSelectedFollowData';
import { unfollow, follow } from '@/slices/follow/thunk';
import { useDispatch } from '@/store';
import { getMyInfo } from '@/slices/user';

const SettingFollowButton = () => {
  const userId = useParams().userId!;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myInfo = useSelectedMyInfo();
  const token = localStorage.getItem('auth-token');
  const { isFollower, isFollowing, followId } = useSelectedFollowData();

  const isMyPage = userId === myInfo?._id;

  const textMap = {
    myPage: '프로필 수정',
    follower: '팔로우',
    following: '언팔로우',
    none: '팔로우',
  };

  const buttonText = isMyPage
    ? textMap.myPage
    : isFollower
      ? textMap.follower
      : isFollowing
        ? textMap.following
        : textMap.none;

  const handleSettingOrFollow = () => {
    if (isMyPage) {
      navigate('setting', { state: myInfo.image });
    } else if (isFollower || isFollowing) {
      if (!myInfo || !token) {
        alert('로그인이 필요합니다.');
        return;
      }
      if (isFollower) {
        dispatch(follow({ myId: myInfo._id, token, userId }));
      }
      if (isFollowing && followId) {
        dispatch(unfollow({ myId: myInfo._id, token, followId }));
      }
    } else {
      if (!myInfo || !token) {
        alert('로그인이 필요합니다.');
        return;
      }
      dispatch(follow({ myId: myInfo._id, token, userId }));
    }
  };

  useEffect(() => {
    if (!token) return;
    dispatch(getMyInfo({ token }));
  }, [dispatch, token]);

  return (
    <Button styleType='ghost' onClick={handleSettingOrFollow}>
      {buttonText}
    </Button>
  );
};

export default SettingFollowButton;
