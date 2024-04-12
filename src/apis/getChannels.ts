// 채널 목록 조회
import { api } from '@/apis/core';
import type { Channel } from './responseModel';

export type Channels = Channel[];

export const getChannels = () =>
  api.get<Channels>({
    url: '/channels',
  });
