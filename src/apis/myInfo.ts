import { useSuspenseQuery } from '@tanstack/react-query';
import { api } from './core';
import { User } from './responseModel';

const getMyInfo = () =>
  api.get<User>({
    url: `/auth-user`,
  });

export const useGetMyInfo = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['my-info'],
    queryFn: getMyInfo,
  });

  return data;
};
