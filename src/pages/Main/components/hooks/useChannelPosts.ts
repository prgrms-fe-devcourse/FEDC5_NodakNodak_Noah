import { useEffect } from 'react';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';
import { useSelectedStatus } from '@/hooks/useSelectedStatus';
import {
  getFullPostList,
  getPostListByChannelId,
} from '@/slices/postList/thunks';
import { useDispatch } from '@/store';

export const useFetchChannelPosts = (channelId: string | undefined) => {
  const dispatch = useDispatch();
  const fullChannelStatus = useSelectedStatus('get', '/posts');
  const posts = useSelectedPostList();

  useEffect(() => {
    if (!channelId) {
      dispatch(getFullPostList());
      return;
    }
    dispatch(getPostListByChannelId({ channelId }));
  }, [dispatch, channelId]);

  return { fullChannelStatus, posts };
};
