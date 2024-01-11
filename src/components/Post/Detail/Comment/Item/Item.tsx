import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState, useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import theme from '@/styles/theme';
import { Text, Avatar } from '@/components/common';
import axiosInstance from '@/utils/customAxios';

interface CommentItemProps {
  author: string;
  createdAt: string;
  comment: string;
  authorId: string;
  commentId: string;
}

interface Comment {
  type: string;
  content: string;
}

const Item = ({
  author,
  createdAt,
  comment,
  authorId,
  commentId,
}: CommentItemProps) => {
  const content = { ...JSON.parse(comment) } as Comment;
  const myInfo = useSelector((state: RootState) => state.userInfo.authUser);
  const { postId } = useParams();
  const dispatch = useDispatch();
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
      className='commentItem'
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        margin: '8px',
        borderBottom: `2px solid ${
          theme.isDark
            ? theme.colors.grayscale[400]
            : theme.colors.grayscale[200]
        }`,
        paddingBottom: '8px',
        width: '712px',
        height: '96px',
      }}>
      <div className='userData' style={{ display: 'inline-flex' }}>
        <Avatar size='middle' alt='유저네임' />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '8px',
            marginLeft: '8px',
          }}>
          <Text
            colorType='grayscale'
            colorNumber={theme.isDark ? '100' : '500'}
            fontType='body1'
            tagType='span'>
            {author}
          </Text>
          <Text
            tagType='span'
            fontType='caption'
            colorType='grayscale'
            colorNumber='300'>
            {createdAt}
          </Text>
        </div>
      </div>
      <Text
        tagType='p'
        fontType='body3'
        colorType='black'
        style={{ paddingLeft: '3rem' }}>
        {content.content}
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
