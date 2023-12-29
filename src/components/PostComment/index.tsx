import Comment from '@/components/Comment';
import theme from '@/styles/theme';
import Input from '@/components/Input';
import Button from '@/components/Button';

const PostComment = () => {
  return (
    <div style={{ margin: '3rem 15.19rem' }}>
      <hr
        style={{
          width: '952px',
          height: '1.48px',
          color: `${theme.colors.grayscale[200]}`,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
        <div
          className='userInput'
          style={{
            display: 'flex',
            marginTop: '16px',
            width: '712px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Input
            flex={false}
            $bordertype='filled'
            placeholder='플레이스 홀더 텍스트'
            width='588px'
            height='48px'
          />
          <Button
            event='enabled'
            size='regular'
            styleType='ghost'
            type='button'>
            제출
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
