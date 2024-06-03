import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from '@/apis/responseModel';
import { Button, Input } from '@/components';
import Item from '@/pages/PostDetail/components/CommentList/CommentItem';
import {
  CommentListContainer,
  FlexColumn,
  FormContainer,
} from '@/pages/PostDetail/components/CommentList/style';
import { useCommentAPI } from '../../hooks/useComment';

interface PostDetailComments {
  postDetailComments: Comment[];
}

const CommentList = ({ postDetailComments }: PostDetailComments) => {
  const { postId } = useParams() as { postId: string };
  const [comment, setComment] = useState('');
  const { createComment } = useCommentAPI(postId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    await createComment(JSON.stringify({ type: 'comment', content: comment }));
    setComment('');
  };

  return (
    <CommentListContainer>
      {postDetailComments.map((comment) => {
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
            value={comment}
            placeholder='댓글을 입력해주세요.'
            fontType='body2'
            width='538px'
            height='48px'
            underline
            onChange={handleInputChange}
          />
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
    </CommentListContainer>
  );
};

export default CommentList;
