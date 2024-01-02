import {
  PostContentWrapper,
  PostContentAuthorWrapper,
} from './PostContentStyled';
import { dummyPost } from './../Dummy';
import { useSelector } from 'react-redux';
import Text from '@/components/Text';
import Avatar from '@/components/Avatar';
import Image from '@/components/Image';
import { RootState } from '@/store';

const PostContent = () => {
  const { title, content } = JSON.parse(dummyPost.title);

  const postDetailContent = useSelector(
    (state: RootState) => state.postDetail.post,
  );
  const postDetailAuthor = useSelector(
    (state: RootState) => state.postDetail.post.author,
  );

  if (!postDetailContent.title) return null;

  return (
    <PostContentWrapper className='ContentTitle'>
      <Text colorType='black' tagType='span' fontType='h1'>
        {title}
      </Text>
      <PostContentAuthorWrapper className='Author'>
        <Avatar src={dummyPost.author.image} size='middle' alt='유저네임' />
        <Text
          colorType='grayscale'
          colorNumber='500'
          fontType='body1'
          tagType='span'
          style={{ margin: '0 10px 0 10px' }}>
          유저네임
        </Text>
        <Text
          tagType='span'
          fontType='caption'
          colorType='grayscale'
          colorNumber='300'>
          {dummyPost.createdAt}
        </Text>
      </PostContentAuthorWrapper>
      <Text
        colorType='black'
        tagType='p'
        fontType='body1'
        style={{ lineHeight: '150%', letterSpacing: '0.02813rem' }}>
        {content}
      </Text>
      <Image
        src={dummyPost.image}
        width='23.25rem'
        height='9.4375rem'
        style={{ marginTop: '1.25rem' }}
      />
    </PostContentWrapper>
  );
};

export default PostContent;
