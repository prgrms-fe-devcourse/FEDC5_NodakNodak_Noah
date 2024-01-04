import { useSelectedComment } from './useSelectedComment';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentItem from '@/components/Comment';
import theme from '@/styles/theme';
import Input from '@/components/Input';
import Button from '@/components/Button';

const PostComment = () => {
  const postDetailComment = useSelectedComment();
  const { postId } = useParams();
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    try {
      axios({
        url: 'https://kdt.frontend.5th.programmers.co.kr:5003/comments/create',
        method: 'POST',
        data: {
          comment: JSON.stringify({
            type: 'comment',
            voteArray: ['한식', '중식', '일식', '양식'],
            content: comment,
          }),
          postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      alert(e);
    }
  };

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
        {postDetailComment.map((comment) => (
          <CommentItem
            author={comment.author.fullName}
            createdAt={comment.createdAt}
            comment={comment.comment}
            key={comment._id}
          />
        ))}
        <form
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
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            event='enabled'
            size='regular'
            styleType='ghost'
            onClick={handleCommentSubmit}
            onKeyDown={(e) => {
              if (e.key === 'enter') handleCommentSubmit(e);
            }}>
            제출
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PostComment;
