import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import {
  PostContentWrapper,
  PostContentAuthorWrapper,
} from '@/components/Post/Detail/Content/style';
import { Text, Button, Avatar } from '@/components/common';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';

const PostContent = () => {
  const postDetailContent = useSelectedPostDetail();
  const navigate = useNavigate();
  const { postId, channelId } = useParams();
  const myInfo = useSelectedMyInfo();
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
      <div style={{ display: 'inline-flex', marginLeft: '20px' }}>
        <Text colorType='black' tagType='span' fontType='h1'>
          {title}
        </Text>
        {author?._id === myInfo?._id ? (
          <>
            <Button
              styleType='primary'
              size='small'
              style={{ border: 'none', cursor: 'pointer' }}
              onClick={handlePostEdit}>
              수정하기
            </Button>
            <Button
              styleType='primary'
              size='small'
              style={{ border: 'none', cursor: 'pointer' }}
              onClick={handlePostDelete}>
              삭제하기
            </Button>
          </>
        ) : null}
      </div>
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
