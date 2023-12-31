import {
  PostContentWrapper,
  PostContentAuthorWrapper,
} from './PostContentStyled';
import { useSelectedPost } from '../useSelectedPost';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Text from '@/components/Text';
import Avatar from '@/components/Avatar';
import { RootState } from '@/store';

const PostContent = () => {
  const postDetailContent = useSelectedPost();
  const navigate = useNavigate();
  const { postId, channelId } = useParams();
  const myInfo = useSelector((state: RootState) => state.userInfo.authUser);
  const { author, createdAt } = postDetailContent;

  if (!postDetailContent.title) return null;

  const { content, title } = JSON.parse(postDetailContent.title);
  const { fullName } = author;

  const handlePostEdit = () => {
    const isConfirm = window.confirm('수정하시겠습니까?');
    if (!isConfirm) return;
    navigate(`/update/${channelId}/${postId}`);
  };
  const handlePostDelete = async () => {
    const isConfirm = window.confirm('게시글을 삭제하시겠습니까?');
    if (!isConfirm) return;
    const token = localStorage.getItem('auth-token');
    try {
      await axios({
        url: `https://kdt.frontend.5th.programmers.co.kr:5003/posts/delete`,
        method: 'DELETE',
        data: {
          id: postId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('게시글이 삭제되었습니다.');
      navigate(`/home`);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <PostContentWrapper className='ContentTitle'>
      <Text colorType='black' tagType='span' fontType='h1'>
        {title}
      </Text>
      {author?._id === myInfo?._id ? (
        <>
          <button
            style={{ marginLeft: '20px', border: 'none', cursor: 'pointer' }}
            onClick={handlePostEdit}>
            수정하기
          </button>
          <button
            style={{ marginLeft: '20px', border: 'none', cursor: 'pointer' }}
            onClick={handlePostDelete}>
            삭제하기
          </button>
        </>
      ) : null}
      <PostContentAuthorWrapper className='Author'>
        <Avatar size='middle' alt='유저네임' />
        <Text
          colorType='grayscale'
          colorNumber='500'
          fontType='body1'
          tagType='span'
          style={{ margin: '0 10px 0 10px' }}>
          {fullName}
        </Text>
        <Text
          tagType='span'
          fontType='caption'
          colorType='grayscale'
          colorNumber='300'>
          {createdAt}
        </Text>
      </PostContentAuthorWrapper>
      <Text
        colorType='black'
        tagType='p'
        fontType='body1'
        style={{ lineHeight: '150%', letterSpacing: '0.02813rem' }}>
        {content}
      </Text>
      {/* <Image
        width='23.25rem'
        height='9.4375rem'
        style={{ marginTop: '1.25rem' }}
      /> */}
    </PostContentWrapper>
  );
};

export default PostContent;
