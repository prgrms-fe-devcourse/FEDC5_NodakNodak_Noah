import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  FlexColumn,
  CommentBoundaryLine,
  CommentContainer,
  FormContainer,
} from '@/pages/PostDetail/components/Comment/style';
import { useDispatch } from '@/store';
import { createNotification } from '@/slices/notification/thunk';
import { CreateNotificationData } from '@/slices/notification/type';
import { getPostDetail } from '@/slices/postDetail/thunk';
import Item from '@/pages/PostDetail/components/Comment/Item';
import { Input, Button } from '@/components';
import { Warning } from '@/pages/Sign/components/style';
import theme from '@/styles/theme';
import { Comment } from '@/types/APIResponseTypes';
import useClickAway from '@/hooks/useClickAway';
import { useSelectedComment } from '@/hooks/useSelectedComment';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';
import axiosInstance from '@/utils/customAxios';

const MAX_COMMENT_LENGTH = 120;

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
    if (
      comment.trim().length > MAX_COMMENT_LENGTH ||
      !comment.trim() ||
      !postId ||
      !token
    ) {
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

      dispatch(createNotification({ notificationData }));
      dispatch(getPostDetail({ postId }));
      setComment('');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <CommentBoundaryLine
      style={{
        margin: '3rem 15.19rem',
        borderTop: `solid 1px ${
          theme.isDark
            ? theme.colors.grayscale[400]
            : theme.colors.grayscale[200]
        }`,
      }}>
      <CommentContainer>
        {postDetailComment.map((comment) => {
          const {
            author: { _id: authorId, fullName, image },
            _id: commentId,
            createdAt,
            comment: commentText,
          } = comment;

          return (
            <Item
              authorName={fullName}
              authorImage={image}
              authorId={authorId}
              createdAt={createdAt}
              comment={commentText}
              commentId={commentId}
              key={commentId}
            />
          );
        })}
        <FormContainer>
          <FlexColumn>
            <Input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              bordertype={warn ? 'error' : 'filled'}
              value={comment}
              placeholder='댓글을 입력해주세요.'
              fontType='body2'
              width='538px'
              height='48px'
              underline
              onChange={handleInputChange}
            />
            {warn ? (
              comment.trim().length > MAX_COMMENT_LENGTH ? (
                <Warning>
                  댓글은 {MAX_COMMENT_LENGTH}자 이하여야 합니다.
                </Warning>
              ) : (
                <Warning>댓글을 입력해주세요.</Warning>
              )
            ) : (
              ''
            )}
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
        </FormContainer>
      </CommentContainer>
    </CommentBoundaryLine>
  );
};

export default PostComment;
