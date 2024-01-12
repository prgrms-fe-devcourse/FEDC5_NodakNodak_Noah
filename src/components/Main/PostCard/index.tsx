import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { Button, Card } from '@/components/common';
import { FlexWrapper } from '@/components/Main/PostCard/style';
import { PostCardProps } from '@/components/Main/PostCard/type';
import PostSnippet from '@/components/Main/PostCard/PostSnippet';
import {
  useSelectedChannel,
  useSelectedChannelLoading,
} from '@/hooks/useSelectedChannel';

const PostCard = ({ post }: PostCardProps) => {
  const { avatar, image, title, count, fullName, userId, _id } = post;
  const channel = useSelectedChannel();
  const channelLoading = useSelectedChannelLoading();
  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );
  const location = useLocation();
  const isUserPage = location.pathname.startsWith('/user');

  const navigate = useNavigate();

  const handleDetailClick = () => {
    const token = localStorage.getItem('auth-token');
    navigate(token ? `/detail/${channel?._id}/${post._id}` : '/sign');
  };

  const handleDetailResultClick = () => {
    const token = localStorage.getItem('auth-token');
    navigate(token ? `/detail/${channel?._id}/${post._id}/result` : '/sign');
  };

  return (
    <Card width='280px' height='280px' shadowType='medium'>
      <PostSnippet
        avatar={avatar}
        image={image}
        title={title}
        count={count}
        fullName={isUserPage ? currentUser?.fullName : fullName}
        userId={isUserPage ? currentUser?._id : userId}
        postId={_id}
        channelId={channel?._id}
      />
      <FlexWrapper>
        <Button
          styleType='primary'
          event={channelLoading ? 'disabled' : 'enabled'}
          onClick={handleDetailClick}>
          자세히 보기
        </Button>
        <Button
          styleType='ghost'
          event={channelLoading ? 'disabled' : 'enabled'}
          onClick={handleDetailResultClick}>
          결과 보기
        </Button>
      </FlexWrapper>
    </Card>
  );
};

PostCard.Group = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 904px;
  gap: 16px;
`;

export default PostCard;
