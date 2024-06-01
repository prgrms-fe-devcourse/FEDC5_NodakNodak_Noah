import PostList from '@/pages/Main/components/PostList/PostList';
import useFetchAllOfPosts from '@/pages/Main/components/hooks/useFetchAllOfPosts';

const AllOfPostList = () => {
  const response = useFetchAllOfPosts({ limit: 9 });

  return <PostList {...response} />;
};

export default AllOfPostList;
