import { TempPost } from './tempType';
import { PostSnippetBox } from './StyledPostCard';
import { UserSnippetBox } from '../UserSnippet/StyledUserSnippet';
import Avatar from '../Avatar';
import Image from '../Image';
import Text from '../Text';

const PostSnippet = ({ avatar, image, title, count, fullName }: TempPost) => {
  return (
    <PostSnippetBox>
      <Image
        width='280px'
        height='146px'
        block={true}
        src={image}
        mode='cover'
      />
      <Text fontType='body2' colorType='black' style={{ fontWeight: '700' }}>
        {title}
      </Text>
      <Text fontType='caption' colorType='black'>
        총
        <Text
          fontType='caption'
          colorType='primary'
          colorNumber='400'
          style={{ display: 'inline' }}>
          {count}
        </Text>
        명 투표
      </Text>
      <UserSnippetBox>
        <Avatar size='mini' src={avatar} />
        <Text fontType='caption' colorType='black'>
          {fullName}
        </Text>
      </UserSnippetBox>
    </PostSnippetBox>
  );
};

export default PostSnippet;
