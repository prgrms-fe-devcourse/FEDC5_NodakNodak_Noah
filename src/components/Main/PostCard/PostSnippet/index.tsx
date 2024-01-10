import { useNavigate } from 'react-router-dom';

import { Text, Image, Avatar } from '@/components/common';
import { UserSnippetBox } from '@/components/Main/style';
import { PostSnippetProps } from '@/components/Main/PostCard/PostSnippet/type';
import {
  PostSnippetBox,
  ContentBox,
} from '@/components/Main/PostCard/PostSnippet/style';

const PostSnippet = ({
  avatar,
  image,
  title,
  count,
  fullName,
  userId,
}: PostSnippetProps) => {
  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate(`/user/${userId}`);
  };

  return (
    <PostSnippetBox>
      <Image
        width='280px'
        height='146px'
        src={image ? image : '/DefaultImage.jpg'}
      />
      <ContentBox>
        <Text tagType='p' fontType='body2' colorType='black'>
          {title}
        </Text>
        <Text tagType='span' fontType='caption' colorType='black'>
          {'총 '}
        </Text>
        <Text
          tagType='span'
          fontType='caption'
          colorType='primary'
          colorNumber='400'>
          {count}
        </Text>
        <Text tagType='span' fontType='caption' colorType='black'>
          명 투표
        </Text>
      </ContentBox>
      <UserSnippetBox onClick={handleUserClick}>
        <Avatar size='mini' src={avatar} />
        <Text tagType='span' fontType='caption' colorType='black'>
          {fullName ? fullName : 'loading...'}
        </Text>
      </UserSnippetBox>
    </PostSnippetBox>
  );
};

export default PostSnippet;
