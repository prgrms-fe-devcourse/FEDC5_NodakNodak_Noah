// postId를 통해 게시글 정보 조회
// 채널명을 통해 채널 정보 조회 , 인코딩 필요
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { api } from './core';
import { Post } from './responseModel';

interface PostTitle {
  title: string;
  content: string;
  voteTitle: string;
  voteArray: string[];
}

const getPost = (postId: string) =>
  api.get<Post>({
    url: `/posts/${postId}`,
  });

const deletePost = (postId: string) =>
  api.delete({
    url: `/posts/delete`,
    data: { id: postId },
  });

export const useDeletePostAPI = (postId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => deletePost(postId),
  });

  return mutateAsync;
};

export const useGetPostAPI = (postId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['post-detail', postId],
    queryFn: () => getPost(postId),
  });

  const {
    title: postDetailTitle,
    comments: postDetailComment,
    ...postDetail
  } = data;
  const postTitle = JSON.parse(postDetailTitle) as PostTitle;

  const postDetailComments = postDetailComment.filter((comment) => {
    const parsedComment = JSON.parse(comment.comment);

    return parsedComment.type === 'comment';
  });

  const postDetailVotes = postDetailComment.filter((comment) => {
    const parsedComment = JSON.parse(comment.comment);

    return parsedComment.type === 'vote';
  });

  return {
    ...postDetail,
    ...postTitle,
    postDetailComments,
    postDetailVotes,
  };
};
