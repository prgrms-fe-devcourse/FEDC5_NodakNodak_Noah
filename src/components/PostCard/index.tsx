import { FlexWrapper } from './StyledPostCard';
import PostSnippet from './PostSnippet';
import { PostCardProps } from './PostCardTypes';
import Button from '../Button';
import Card from '../Card';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import {
  useSelectedChannel,
  useSelectedChannelLoading,
} from '@/hooks/useSelectedChannel';

const PostCard = ({ post }: PostCardProps) => {
  const { avatar, image, title, count, fullName, userId } = post;
  const channel = useSelectedChannel();
  const channelLoading = useSelectedChannelLoading();
  const currentUser = useSelector(
    (state: RootState) => state.userInfo.currentUser,
  );
  const location = useLocation();
  const isUserPage = location.pathname.startsWith('/user');

  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail/${channel?._id}/${post._id}`);
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
          onClick={handleDetailClick}>
          결과 보기
        </Button>
      </FlexWrapper>
    </Card>
  );
};

PostCard.Group = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 904px;

  gap: 16px;
`;

export default PostCard;
