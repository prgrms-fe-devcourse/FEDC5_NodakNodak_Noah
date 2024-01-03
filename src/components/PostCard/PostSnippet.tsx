import { PostSnippetBox } from './StyledPostCard';
import { PostSnippetProps } from './PostCardTypes';
import { UserSnippetBox } from '../UserSnippet/StyledUserSnippet';
import Avatar from '../Avatar';
import Image from '../Image';
import Text from '../Text';

const PostSnippet = ({
  avatar,
  image,
  title,
  count,
  fullName,
}: PostSnippetProps) => {
  return (
    <PostSnippetBox>
      <Image width='280px' height='146px' src={image} />
      <div>
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
      </div>
      <UserSnippetBox>
        <Avatar size='mini' src={avatar} />
        <Text tagType='span' fontType='caption' colorType='black'>
          {fullName}
        </Text>
      </UserSnippetBox>
    </PostSnippetBox>
  );
};

export default PostSnippet;
