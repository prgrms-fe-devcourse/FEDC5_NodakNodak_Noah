import Avatar from './../Avatar/index';
import Text from './../Text/index';
import theme from '@/styles/theme';
import { Comment } from '@/pages/DetailPage/Dummy';

const CommentItem = ({ author, createdAt, comment }: Comment) => {
  const { fullname, image } = author;
  const { content } = comment;
  // 여기서 에러가 왜 발생하는지 알 수가 없음

  return (
    <div
      className='commentItem'
      style={{
        margin: '8px',
        borderBottom: `2px solid ${theme.colors.grayscale[200]}`,
        paddingBottom: '8px',
        width: '712px',
        height: '96px',
      }}>
      <div className='userData' style={{ display: 'inline-flex' }}>
        <Avatar src={image} size='middle' alt='유저네임' />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '8px',
            marginLeft: '8px',
          }}>
          <Text
            colorType='grayscale'
            colorNumber='500'
            fontType='body1'
            tagType='span'>
            {fullname}
          </Text>
          <Text
            tagType='span'
            fontType='caption'
            colorType='grayscale'
            colorNumber='300'>
            {createdAt}
          </Text>
          <hr />
        </div>
      </div>
      <Text tagType='span' fontType='body3' colorType='black'>
        {content}
      </Text>
    </div>
  );
};

export default CommentItem;
