import { useParams } from 'react-router-dom';
import PostList from '@/pages/Main/components/PostList/PostList';
import useFetchSearchPosts from '@/pages/Main/components/hooks/useFetchSearchPosts';

const SearchPostList = () => {
  const { search } = useParams<{ search: string }>();
  const response = useFetchSearchPosts({ search });

  return <PostList response={response} />;
};
export default SearchPostList;
