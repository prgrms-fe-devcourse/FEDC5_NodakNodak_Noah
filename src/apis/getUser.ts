// userId를 통해 한명의 사용자 정보 조회
import { useSuspenseQuery } from '@tanstack/react-query';
import { api } from './core';
import type { User } from './responseModel';

const getUser = (userId: string) =>
  api.get<User>({
    url: `/user/${userId}`,
  });

export const useGetUser = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['getUser', userId],
    queryFn: () => getUser(userId),
  });

  return data;
};
