// 채널명을 통해 채널 정보 조회 , 인코딩 필요
import { api } from '@/apis/core';
import type { Channel } from '@/apis/responseModel';

export const getChannel = (channelName: string) =>
  api.get<Channel>({
    url: `/channels/${encodeURIComponent(channelName)}`,
  });
