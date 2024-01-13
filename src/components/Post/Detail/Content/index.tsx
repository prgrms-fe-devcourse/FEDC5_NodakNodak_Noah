import { useNavigate, useParams } from 'react-router-dom';

import {
  PostContentContainer,
  PostContentAuthorWrapper,
  PostContentTitleContainer,
} from '@/components/Post/Detail/Content/style';
import { Text, Button, Avatar, Image } from '@/components/common';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { useSelectedPostDetail } from '@/hooks/useSelectedPostDetail';
import axiosInstance from '@/utils/customAxios';
import theme from '@/styles/theme';

const PostContent = () => {
  const postDetailContent = useSelectedPostDetail();
  const navigate = useNavigate();
  const { postId } = useParams();
  const myInfo = useSelectedMyInfo();
  const { author, createdAt } = postDetailContent;

  if (!postDetailContent.title) return null;

  const { content, title } = JSON.parse(postDetailContent.title);
  const { fullName, image, _id } = author;
  const dataObject = new Date(createdAt);
  const year = dataObject.getFullYear();
  const month = dataObject.getMonth() + 1;
  const date = dataObject.getDate();

  const handlePostEdit = () => {
    const isConfirm = window.confirm('수정하시겠습니까?');
    if (!isConfirm) return;
    navigate(`/update/${postId}`, { state: postDetailContent });
  };

  const handlePostDelete = async () => {
    const isConfirm = window.confirm('게시글을 삭제하시겠습니까?');
    if (!isConfirm) return;
    try {
      await axiosInstance.delete(`posts/delete`, { data: { id: postId } });
      alert('게시글이 삭제되었습니다.');
      navigate(`/home`);
    } catch (e) {
      alert(e);
    }
  };

  const handlePostAuthorAvatarClick = () => {
    navigate(`/user/${_id}`);
  };

  return (
    <PostContentContainer>
      <PostContentTitleContainer
        style={{ display: 'inline-flex', marginLeft: '20px' }}>
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
      </PostContentTitleContainer>
      <PostContentAuthorWrapper className='Author'>
        <Avatar
          size='middle'
          alt='유저네임'
          src={image}
          onClick={handlePostAuthorAvatarClick}
        />
        <Text
          colorType='grayscale'
          colorNumber={theme.isDark ? '100' : '500'}
          fontType='body1'
          tagType='span'
          style={{ margin: '0 10px' }}>
          {fullName}
        </Text>
        <Text
          tagType='span'
          fontType='caption'
          colorType='grayscale'
          colorNumber='300'>
          {`${year}년 ${month}월 ${date}일`}
        </Text>
      </PostContentAuthorWrapper>
      <Text
        colorType='black'
        tagType='p'
        fontType='body1'
        style={{ lineHeight: '150%', letterSpacing: '0.02813rem' }}>
        {content}
      </Text>
      {postDetailContent.image ? (
        <Image
          width='32rem'
          height='18rem'
          style={{ marginTop: '1.25rem' }}
          src={postDetailContent.image}
        />
      ) : null}
    </PostContentContainer>
  );
};

export default PostContent;
