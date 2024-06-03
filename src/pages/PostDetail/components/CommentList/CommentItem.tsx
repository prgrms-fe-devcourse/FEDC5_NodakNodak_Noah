import { useNavigate, useParams } from 'react-router-dom';
import { useGetMyInfo } from '@/apis/myInfo';
import { Avatar, Button, Text } from '@/components';
import theme from '@/styles/theme';
import timeOffset from '@/utils/formatRelativeDate';
import { useCommentAPI } from '../../hooks/useComment';
import {
  CommentAuthorContainer,
  CommentAuthorWrapper,
  CommentItemContainer,
} from './style';

export interface CommentItemProps {
  authorName: string;
  authorImage: string;
  createdAt: string;
  comment: string;
  authorId: string;
  commentId: string;
}

export interface CommentContent {
  type: string;
  content: string;
}

const CommentItem = ({
  authorName,
  authorImage,
  authorId,
  createdAt,
  comment,
  commentId,
}: CommentItemProps) => {
  const myInfo = useGetMyInfo();
  const navigate = useNavigate();
  const { postId } = useParams() as { postId: string };
  const { deleteComment } = useCommentAPI(postId);

  const { content } = { ...JSON.parse(comment) } as CommentContent;

  const handleCommentAuthorAvatarClick = (id: string) => {
    navigate(`/user/${id}`);
  };

  const handleCommentRemove = async () => {
    const isConfirm = confirm('댓글을 정말 삭제하시겠습니까?');
    if (!isConfirm) return;
    deleteComment(commentId);
  };

  return (
    <CommentItemContainer>
      <CommentAuthorContainer>
        <Avatar
          size='middle'
          alt='유저네임'
          src={authorImage}
          onClick={() => {
            handleCommentAuthorAvatarClick(authorId);
          }}
          style={{ cursor: 'pointer' }}
        />
        <CommentAuthorWrapper>
          <Text
            colorType='grayscale'
            colorNumber={theme.isDark ? '100' : '500'}
            fontType='body1'
            tagType='span'
            style={{ minWidth: '80px' }}>
            {authorName}
          </Text>
          <Text
            tagType='span'
            fontType='caption'
            colorType='grayscale'
            colorNumber='300'>
            {`${timeOffset(createdAt)}`}
          </Text>
        </CommentAuthorWrapper>
      </CommentAuthorContainer>
      <Text
        tagType='p'
        fontType='body3'
        colorType='black'
        style={{
          maxWidth: '340px',
          wordWrap: 'break-word',
          flexGrow: 1,
        }}>
        {content}
      </Text>
      {(authorId === myInfo?._id || myInfo.role === 'SuperAdmin') && (
        <Button onClick={handleCommentRemove}>삭제</Button>
      )}
    </CommentItemContainer>
  );
};

export default CommentItem;
