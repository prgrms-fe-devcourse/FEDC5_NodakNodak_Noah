import {
  PostContentWrapper,
  PostContentAuthorWrapper,
} from './PostContentStyled';
import Text from '../Text';
import Avatar from '../Avatar';
import Image from '../Image';

const PostContent = () => {
  return (
    <PostContentWrapper className='ContentTitle'>
      <Text colorType='black' tagType='span' fontType='h1'>
        제목은 여기에
      </Text>
      <PostContentAuthorWrapper className='Author'>
        <Avatar
          src='https://via.placeholder.com/150'
          shape='circle'
          size='middle'
          mode='cover'
          alt='유저네임'
        />
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
          2023.12.26 12:53
        </Text>
      </PostContentAuthorWrapper>
      <Text
        colorType='black'
        tagType='p'
        fontType='body1'
        style={{ lineHeight: '150%', letterSpacing: '0.02813rem' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Image
        block={true}
        src='https://via.placeholder.com/150'
        width='23.25rem'
        height='9.4375rem'
        style={{ marginTop: '1.25rem' }}
      />
    </PostContentWrapper>
  );
};

export default PostContent;
