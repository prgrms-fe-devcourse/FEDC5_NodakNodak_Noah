import { useParams, useSearchParams } from 'react-router-dom';

import Pagination from '@/components/common/Pagination';
import PostCard from '@/components/Main/PostList/PostCard';
import MainPageSpinner from '@/components/common/MainPageSpinner';
import { useSearchPosts } from '@/components/Main/hooks/useSearchPosts';
import { PostCardWrapper } from '@/components/Main/PostList/PostCard/style';
import { useFetchChannelPosts } from '@/components/Main/hooks/useChannelPosts';
import { usePagination } from '@/hooks/usePagination';

const PostList = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search');
  const { channelId } = useParams();

  const { searchedPostLoading, searchedPosts } = useSearchPosts(keyword);
  const { fullChannelStatus, posts } = useFetchChannelPosts(channelId);

  const isLoading = searchedPostLoading || fullChannelStatus.isLoading;

  const postList = keyword ? searchedPosts : posts;
  const { paginatedPostList, totalPage, currentPage, handlePageChange } =
    usePagination(postList, 9);

  return (
    <>
      {isLoading ? (
        <MainPageSpinner />
      ) : (
        <PostCardWrapper>
          {paginatedPostList.map(({ _id, image, title, author, comments }) => (
            <PostCard
              key={_id}
              postId={_id}
              image={image}
              title={title}
              author={author}
              comments={comments}
            />
          ))}
        </PostCardWrapper>
      )}
      <Pagination
        page={currentPage}
        totalPage={totalPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PostList;
