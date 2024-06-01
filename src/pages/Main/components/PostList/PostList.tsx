import { UseInfiniteQueryResult, UseQueryResult } from '@tanstack/react-query';
import { Button } from '@/components';
import MainPageSpinner from '@/components/MainPageSpinner';
import PostCard, {
  PostCardProps,
} from '@/pages/Main/components/PostList/PostCard';
import { PostCardWrapper } from '@/pages/Main/components/PostList/style';

type PostListProps = Partial<UseInfiniteQueryResult<PostCardProps[]>> &
  UseQueryResult<PostCardProps[]>;

const PostList = ({
  data,
  isFetching,
  isPending,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: PostListProps) => {
  if (isPending) {
    return <MainPageSpinner />;
  }

  return (
    <>
      <PostCardWrapper>
        {data?.map(({ _id, image, title, author, comments }) => (
          <PostCard
            key={_id}
            _id={_id}
            image={image}
            title={title}
            author={author}
            comments={comments}
          />
        ))}
      </PostCardWrapper>
      {!!fetchNextPage && (
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
