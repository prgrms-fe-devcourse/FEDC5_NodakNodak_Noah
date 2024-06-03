import { Link } from 'react-router-dom';
import { User } from '@/apis/responseModel';
import { Avatar, Text } from '@/components';
import theme from '@/styles/theme';
import timeOffset from '@/utils/formatRelativeDate';
import PostContentButton from './PostContentButton';
import {
  PostAuthorWrapper,
  PostContentContainer,
  PostContentWrapper,
  PostTitleWrapper,
} from './style';

interface PostContent {
  title: string;
  fullName: string;
  authorID: string;
  image?: string;
  createdAt: string;
  content: string;
}

interface PostContentProps {
  postContent: PostContent;
  myInfo: User;
}

const PostContent = ({ postContent, myInfo }: PostContentProps) => {
  const { title, fullName, authorID, image, createdAt, content } = postContent;
  const { _id: myID, role } = myInfo;

  return (
    <PostContentContainer>
      <PostTitleWrapper>
        <Text colorType='black' tagType='span' fontType='h1'>
          {title}
        </Text>
        {authorID === myID || role === 'SuperAdmin' ? (
          <PostContentButton />
        ) : null}
      </PostTitleWrapper>
      <PostAuthorWrapper>
        <Link to={`/user/${authorID}`}>
          <Avatar size='middle' alt='유저네임' src={image} />
        </Link>
        <Text
          colorType='grayscale'
          colorNumber={theme.isDark ? '100' : '500'}
          fontType='body1'
          tagType='span'>
          {fullName}
        </Text>
        <Text
          tagType='span'
          fontType='caption'
          colorType='grayscale'
          colorNumber='300'>
          {timeOffset(createdAt)}
        </Text>
      </PostAuthorWrapper>
      <PostContentWrapper>
        <Text
          colorType='black'
          tagType='p'
          fontType='body1'
          style={{
            lineHeight: '150%',
            letterSpacing: '0.02813rem',
            wordWrap: 'break-word',
          }}>
          {content}
        </Text>
        {image ? (
          <img
            style={{
              marginTop: '1.25rem',
              width: 'auto',
              height: 'auto',
              maxWidth: '20rem',
            }}
            src={image}
          />
        ) : null}
      </PostContentWrapper>
    </PostContentContainer>
  );
};

export default PostContent;
