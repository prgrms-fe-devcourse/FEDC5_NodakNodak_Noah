import Avatar from './../Avatar/index';
import Text from './../Text/index';
import theme from '@/styles/theme';

const Comment = () => {
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
        <Avatar
          src='https://via.placeholder.com/150'
          size='middle'
          alt='유저네임'
        />
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
            nickname
          </Text>
          <Text
            tagType='span'
            fontType='caption'
            colorType='grayscale'
            colorNumber='300'>
            2023.12.23 13:27
          </Text>
          <hr />
        </div>
      </div>
      <Text tagType='span' fontType='body3' colorType='black'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
    </div>
  );
};

export default Comment;
