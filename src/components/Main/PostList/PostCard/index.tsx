import { useLocation, useNavigate } from 'react-router-dom';

import {
  FlexWrapper,
  PostSnippetBox,
  ContentBox,
} from '@/components/Main/PostList/PostCard/style';
import { UserSnippetBox } from '@/components/Main/style';
import { Button, Card, Text, Avatar } from '@/components/common';
import { PostCardProps } from '@/components/Main/PostList/PostCard/type';
import {
  useSelectedChannel,
  useSelectedChannelLoading,
} from '@/hooks/useSelectedChannel';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import theme from '@/styles/theme';

const PostCard = ({
  image,
  title,
  author,
  postId,
  comments,
}: PostCardProps) => {
  const { fullName, _id: userId, image: avatar } = author;

  const currentUser = useSelectedUser();
  const location = useLocation();

  const parsedTitle = JSON.parse(title).title;
  const isUserPage = location.pathname.startsWith('/user');
  const name = isUserPage ? currentUser?.fullName : fullName;

  const count = comments
    .filter((comment) => {
      const parsedComment = JSON.parse(comment.comment);

      return parsedComment.type === 'vote';
    })
    .length.toString();

  const channel = useSelectedChannel();
  const channelLoading = useSelectedChannelLoading();

  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail/${channel?._id}/${postId}`);
  };

  const handleDetailResultClick = () => {
    navigate(`/detail/${channel?._id}/${postId}/result`);
  };

  const handleUserClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <Card width='280px' height='280px' shadowType='medium'>
      <PostSnippetBox>
        <img
          width='280px'
          height='146px'
          src={image ? image : '/DefaultImage.jpg'}
          onClick={handleDetailClick}
          style={{ cursor: 'pointer' }}
        />
        <ContentBox>
          <Text
            tagType='p'
            fontType='body2'
            colorType='black'
            style={{
              overflow: 'hidden',
              textOverflow: ' ellipsis',
              whiteSpace: 'nowrap',
              width: '260px',
            }}>
            {parsedTitle}
          </Text>
          <Text tagType='span' fontType='caption' colorType='black'>
            {'총 '}
          </Text>
          <Text
            tagType='span'
            fontType='caption'
            colorType='primary'
            colorNumber={theme.isDark ? '200' : '400'}>
            {count}
          </Text>
          <Text tagType='span' fontType='caption' colorType='black'>
            명 투표
          </Text>
        </ContentBox>
        <UserSnippetBox onClick={handleUserClick}>
          <Avatar size='mini' src={avatar} alt={name} />
          <Text tagType='span' fontType='caption' colorType='black'>
            {name ? name : 'loading...'}
          </Text>
        </UserSnippetBox>
      </PostSnippetBox>
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

export default PostCard;
