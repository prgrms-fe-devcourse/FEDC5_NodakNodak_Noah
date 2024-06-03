import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components';
import { useDeletePost } from '../../hooks/useDeletePost';
import { PostEditButtonWrapper } from './style';

const PostContentButton = () => {
  const navigate = useNavigate();
  const { postId } = useParams() as { postId: string };
  const deletePost = useDeletePost(postId);

  const handlePostEdit = () => {
    const isConfirm = window.confirm('수정하시겠습니까?');
    if (!isConfirm) return;
    navigate(`/update/${postId}`);
  };

  const handlePostDelete = async () => {
    const isConfirm = window.confirm('게시글을 삭제하시겠습니까?');
    if (!isConfirm) return;
    await deletePost();
  };

  return (
    <PostEditButtonWrapper>
      <Button styleType='primary' size='small' onClick={handlePostEdit}>
        수정하기
      </Button>
      <Button styleType='primary' size='small' onClick={handlePostDelete}>
        삭제하기
      </Button>
    </PostEditButtonWrapper>
  );
};

export default PostContentButton;
