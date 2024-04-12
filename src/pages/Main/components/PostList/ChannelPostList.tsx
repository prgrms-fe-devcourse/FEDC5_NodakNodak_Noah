import { useParams } from 'react-router-dom';
import PostList from '@/pages/Main/components/PostList/PostList';
import useFetchChannelPosts from '@/pages/Main/components/hooks/useFetchChannelPosts';

const ChannelPostList = () => {
  const channelId = useParams<{ channelId: string }>().channelId;
  const response = useFetchChannelPosts({ channelId, limit: 9 });

  return <PostList {...response} />;
};

export default ChannelPostList;
