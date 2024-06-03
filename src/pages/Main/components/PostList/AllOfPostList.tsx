import PostList from '@/pages/Main/components/PostList/PostList';
import useFetchAllOfPosts from '@/pages/Main/hooks/useFetchAllOfPosts';

const AllOfPostList = () => {
  const response = useFetchAllOfPosts({ limit: 9 });

  return <PostList {...response} />;
};

export default AllOfPostList;
