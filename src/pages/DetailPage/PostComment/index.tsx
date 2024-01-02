import { dummyPost } from '../Dummy';
import { useSelector } from 'react-redux';
import CommentItem from '@/components/Comment';
import theme from '@/styles/theme';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { RootState } from '@/store';

const PostComment = () => {
  const postDetailComment = useSelector(
    (state: RootState) => state.postDetail.post.comments,
  );

  return (
    <div
      style={{
        margin: '3rem 15.19rem',
        borderTop: `solid 1px ${theme.colors.grayscale[200]}`,
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {dummyPost.comments.map((comment, index) => (
          <CommentItem
            author={comment.author}
            createdAt={comment.createdAt}
            comment={comment.comment}
            key={index}
          />
        ))}
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
            bordertype='filled'
            placeholder='플레이스 홀더 텍스트'
            fontType='body2'
            width='538px'
            height='48px'
            underline={true}
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
