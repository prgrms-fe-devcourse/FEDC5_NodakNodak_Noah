import { useSelectedComment } from './useSelectedComment';
import { FlexColumn } from './StyledPostComment';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentItem from '@/components/Comment';
import theme from '@/styles/theme';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import { Warning } from '@/components/Sign/SignStyle';
import useClickAway from '@/hooks/useClickAway';
import {
  createNotification,
  CreateNotificationData,
} from '@/slices/notification/thunk';
import { Comment } from '@/types/APIResponseTypes';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';

const PostComment = () => {
  const postDetailComment = useSelectedComment();
  const { postId } = useParams();
  const [comment, setComment] = useState('');
  const [warn, setWarn] = useState(false);
  const dispatch = useDispatch();
  const postDetail = useSelectedPostDetail();

  const handleClickAway = () => {
    setWarn(false);
  };
  const inputRef = useClickAway(handleClickAway);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWarn(false);
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    if (!comment || !postId || !token) {
      setWarn(true);
      return;
    }

    try {
      const { _id } = (
        await axios({
          url: 'https://kdt.frontend.5th.programmers.co.kr:5003/comments/create',
          method: 'POST',
          data: {
            comment: JSON.stringify({
              type: 'comment',
              content: comment,
            }),
            postId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data as Comment;

      const notificationData: CreateNotificationData = {
        notificationType: 'COMMENT',
        notificationTypeId: _id,
        postId,
        userId: postDetail.author._id,
      };

      dispatch(createNotification({ token, notificationData }));
      dispatch(getPostDetail({ postId }));
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
            authorId={comment.author._id}
            createdAt={comment.createdAt}
            comment={comment.comment}
            commentId={comment._id}
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
          <FlexColumn>
            <Input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              bordertype={warn ? 'error' : 'filled'}
              placeholder='댓글을 입력해주세요.'
              fontType='body2'
              width='538px'
              height='48px'
              underline={true}
              onChange={handleInputChange}
            />
            {warn ? <Warning>댓글을 입력해주세요.</Warning> : ''}
          </FlexColumn>
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
