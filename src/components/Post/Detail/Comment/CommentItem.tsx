import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { RootState, useDispatch } from '@/store';
import { getPostDetail } from '@/slices/postDetail';
import theme from '@/styles/theme';
import Text from '@/components/Common/Text/index';
import Avatar from '@/components/Common/Avatar/index';

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

const CommentItem = ({
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
    const token = localStorage.getItem('auth-token');
    const isConfirm = window.confirm('댓글을 정말 삭제하시겠습니까?');
    if (!isConfirm) return;
    try {
      await axios({
        url: 'https://kdt.frontend.5th.programmers.co.kr:5003/comments/delete',
        method: 'DELETE',
        data: {
          id: commentId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
        borderBottom: `2px solid ${theme.colors.grayscale[200]}`,
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
            colorNumber='500'
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
          <hr />
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

export default CommentItem;
