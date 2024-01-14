import { useEffect } from 'react';

import { useDispatch } from '@/store';
import {
  getFullPostList,
  getPostListByChannelId,
} from '@/slices/postList/thunks';
import { useSelectedStatus } from '@/hooks/useSelectedStatus';
import { useSelectedPostList } from '@/hooks/useSelectedPostList';

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
