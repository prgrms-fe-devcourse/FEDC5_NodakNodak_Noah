import Avatar from './../Avatar/index';
import Text from './../Text/index';
import { Comment } from '@/pages/DetailPage/PostComment/useSelectedComment';
import theme from '@/styles/theme';

interface CommentItemProps {
  author: string;
  createdAt: string;
  comment: string;
}
const CommentItem = ({ author, createdAt, comment }: CommentItemProps) => {
  const content = { ...JSON.parse(comment) } as Comment;

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
        {content.content}
      </Text>
    </div>
  );
};

export default CommentItem;
