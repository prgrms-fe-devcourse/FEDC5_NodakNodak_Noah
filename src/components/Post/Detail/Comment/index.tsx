import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { FlexColumn } from '@/components/Post/Detail/Comment/style';
import { useDispatch } from '@/store';
import {
  createNotification,
  CreateNotificationData,
} from '@/slices/notification/thunk';
import { getPostDetail } from '@/slices/postDetail';
import Item from '@/components/Post/Detail/Comment/Item/Item';
import { Input, Button } from '@/components/common';
import { Warning } from '@/components/Sign/style';
import theme from '@/styles/theme';
import { Comment } from '@/types/APIResponseTypes';
import useClickAway from '@/hooks/useClickAway';
import { useSelectedComment } from '@/hooks/useSelectedComment';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';
import axiosInstance from '@/utils/customAxios';

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
      const {
        data: { _id },
      } = await axiosInstance.post<Comment>('comments/create', {
        comment: JSON.stringify({
          type: 'comment',
          content: comment,
        }),
        postId,
      });
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
        {postDetailComment.map((comment) => {
          const {
            author: { _id: authorId, fullName },
            _id: commentId,
            createdAt,
            comment: commentText,
          } = comment;

          return (
            <Item
              author={fullName}
              authorId={authorId}
              createdAt={createdAt}
              comment={commentText}
              commentId={commentId}
              key={commentId}
            />
          );
        })}
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
