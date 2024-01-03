import { useSelectedComment } from './useSelectedComment';
import { useState } from 'react';
import axios from 'axios';
import CommentItem from '@/components/Comment';
import theme from '@/styles/theme';
import Input from '@/components/Input';
import Button from '@/components/Button';

const PostComment = () => {
  const postDetailComment = useSelectedComment();
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios({
        url: 'https://kdt.frontend.5th.programmers.co.kr:5003/comments/create',
        method: 'POST',
        data: {
          comment: JSON.stringify({
            type: 'comment',
            voteArray: ['한식', '중식', '일식', '양식'], // 추후에 voteArray는 전부 없어도 될 것 같음
            content: comment,
          }),
          postId: '6592c80a2a48542ca963b86d', // url의 params로 받아와야 함
        },
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ODcwODQ3YjAzNTcyMWYyMzM1ODA2MiIsImVtYWlsIjoic29uaG9taW45OEBuYXZlci5jb20ifSwiaWF0IjoxNzAzMzQ4Mjk1fQ.m3mYBXsAdzJhvvyde3PJy9lbYYPIFMx_PJBMtYMTWKw',
          // userInfo 에서 토큰값 받아와야 함
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
