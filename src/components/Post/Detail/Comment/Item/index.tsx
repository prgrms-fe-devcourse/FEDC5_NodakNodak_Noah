import { useParams } from 'react-router-dom';

import {
  CommentItemProps,
  CommentContent,
} from '@/components/Post/Detail/Comment/Item/type';
import { useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import theme from '@/styles/theme';
import { Text, Avatar } from '@/components/common';
import axiosInstance from '@/utils/customAxios';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';

const Item = ({
  authorName,
  authorImage,
  authorId,
  createdAt,
  comment,
  commentId,
}: CommentItemProps) => {
  const myInfo = useSelectedMyInfo();
  const { postId } = useParams();
  const dispatch = useDispatch();

  const { content } = { ...JSON.parse(comment) } as CommentContent;
  const handleCommentRemove = async () => {
    const isConfirm = window.confirm('댓글을 정말 삭제하시겠습니까?');
    if (!isConfirm) return;

    try {
      axiosInstance.delete(`comments/delete`, { data: { id: commentId } });
      dispatch(getPostDetail({ postId }));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        margin: '8px',
        borderBottom: `2px solid ${theme.colors.grayscale[200]}`,
        paddingBottom: '8px',
        width: '712px',
        height: '96px',
      }}>
      <div style={{ display: 'inline-flex' }}>
        <Avatar size='middle' alt='유저네임' src={authorImage} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '8px',
            marginLeft: '8px',
          }}>
          <Text
            colorType='grayscale'
            colorNumber='500'
            fontType='body1'
            tagType='span'>
            {authorName}
          </Text>
          <Text
            tagType='span'
            fontType='caption'
            colorType='grayscale'
            colorNumber='300'>
            {createdAt}
          </Text>
          <hr />
        </div>
      </div>
      <Text
        tagType='p'
        fontType='body3'
        colorType='black'
        style={{ paddingLeft: '3rem' }}>
        {content}
      </Text>
      {authorId === myInfo?._id ? (
        <button
          style={{ position: 'absolute', right: '2px', border: 'none' }}
          onClick={handleCommentRemove}>
          삭제
        </button>
      ) : null}
    </div>
  );
};

export default Item;
