import { useLocation, useNavigate } from 'react-router-dom';
import { Comment, User } from '@/apis/responseModel';
import { Avatar, Button, Card, Text } from '@/components';
import {
  useSelectedChannel,
  useSelectedChannelLoading,
} from '@/hooks/useSelectedChannel';
import { useSelectedUser } from '@/hooks/useSelectedUser';
import {
  ContentBox,
  FlexWrapper,
  PostSnippetBox,
} from '@/pages/Main/components/PostList/style';
import { UserSnippetBox } from '@/pages/Main/components/style';
import theme from '@/styles/theme';

export interface PostCardProps {
  image?: string;
  title: string;
  author: User;
  _id: string;
  comments: Comment[];
}

const PostCard = ({
  image,
  title,
  author,
  _id: postId,
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

  const handleUserClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <Card width='280px' height='280px' shadowType='medium'>
      <PostSnippetBox>
        <img
          width='280px'
          height='146px'
          src={image ? image : '/DefaultImage.webp'}
          onClick={handleDetailClick}
          style={{ cursor: 'pointer' }}
          alt={postId}
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
      </FlexWrapper>
    </Card>
  );
};

export default PostCard;
