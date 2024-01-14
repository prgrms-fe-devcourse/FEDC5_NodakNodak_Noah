import { useNavigate } from 'react-router-dom';
import {
  CommentItemProps,
  CommentContent,
} from '@/components/Post/Detail/Comment/Item/type';
import { useDispatch } from '@/store';
import { deleteComment } from '@/slices/postDetail';
import { Text, Avatar, Button } from '@/components/common';
import axiosInstance from '@/utils/customAxios';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import {
  CommentItemContainer,
  CommentAuthorContainer,
  CommentAuthorWrapper,
} from '@/components/Post/Detail/Comment/Item/style';
import theme from '@/styles/theme';

const Item = ({
  authorName,
  authorImage,
  authorId,
  createdAt,
  comment,
  commentId,
}: CommentItemProps) => {
  const myInfo = useSelectedMyInfo();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dateObject = new Date(createdAt);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();

  const { content } = { ...JSON.parse(comment) } as CommentContent;

  const handleCommentAuthorAvatarClick = (id: string) => {
    navigate(`/user/${id}`);
  };

  const handleCommentRemove = async () => {
    const isConfirm = window.confirm('댓글을 정말 삭제하시겠습니까?');
    if (!isConfirm) return;

    try {
      axiosInstance.delete(`comments/delete`, { data: { id: commentId } });
      dispatch(deleteComment(commentId));
    } catch (e) {
      alert(e);
    }
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
        />
        <CommentAuthorWrapper>
          <Text
            colorType='grayscale'
            colorNumber={theme.isDark ? '100' : '500'}
            fontType='body1'
            tagType='span'>
            {authorName}
          </Text>
          <Text
            tagType='span'
            fontType='caption'
            colorType='grayscale'
            colorNumber='300'
            style={{ marginTop: '10px' }}>
            {`${year}년 ${month}월 ${date}일`}
          </Text>
        </CommentAuthorWrapper>
      </CommentAuthorContainer>
      <Text
        tagType='p'
        fontType='body3'
        colorType='black'
        style={{ paddingLeft: '3rem' }}>
        {content}
      </Text>
      {authorId === myInfo?._id ? (
        <Button
          style={{
            position: 'absolute',
            right: '2px',
            bottom: '40px',
            border: 'none',
          }}
          onClick={handleCommentRemove}>
          삭제
        </Button>
      ) : null}
    </CommentItemContainer>
  );
};

export default Item;
