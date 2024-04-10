import { UseInfiniteQueryResult, UseQueryResult } from '@tanstack/react-query';
import { Post, SearchedPost } from '@/apis/responseModel';
import { Button } from '@/components';
import MainPageSpinner from '@/components/MainPageSpinner';
import PostCard from '@/pages/Main/components/PostList/PostCard';
import { PostCardWrapper } from '@/pages/Main/components/PostList/style';

const IsInfiniteQueryResult = (
  response: UseInfiniteQueryResult<Post[]> | UseQueryResult<SearchedPost[]>,
): response is UseInfiniteQueryResult<Post[]> => {
  return 'fetchNextPage' in response;
};

export interface PostListProps {
  response: UseInfiniteQueryResult<Post[]> | UseQueryResult<SearchedPost[]>;
}

const PostList = ({ response }: PostListProps) => {
  const { data, isFetching, isPending } = response;

  const infiniteResponse = IsInfiniteQueryResult(response) ? response : null;

  const { fetchNextPage, hasNextPage, isFetchingNextPage } =
    infiniteResponse || {};

  if (isPending) {
    return <MainPageSpinner />;
  }

  return (
    <>
      <PostCardWrapper>
        {data?.map(({ _id, image, title, author, comments }) => (
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
      {infiniteResponse && (
        <>
          <Button
            onClick={() => fetchNextPage && fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            event={!hasNextPage || isFetchingNextPage ? 'disabled' : 'enabled'}>
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
          </Button>
          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )}
    </>
  );
};

export default PostList;
