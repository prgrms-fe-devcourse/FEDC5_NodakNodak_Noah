import { useParams, useSearchParams } from 'react-router-dom';
import MainPageSpinner from '@/components/MainPageSpinner';
import Pagination from '@/components/Pagination';
import { usePagination } from '@/hooks/usePagination';
import PostCard from '@/pages/Main/components/PostList/PostCard';
import { PostCardWrapper } from '@/pages/Main/components/PostList/style';
import { useFetchChannelPosts } from '@/pages/Main/components/hooks/useChannelPosts';
import { useSearchPosts } from '@/pages/Main/components/hooks/useSearchPosts';

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