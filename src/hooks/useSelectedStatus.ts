import { useSelector } from 'react-redux';
import { AxiosError } from 'axios';

import { RootState } from '@/store';
import { ensuerEndingSlash } from '@/utils/customAxios/utils';
import { Methods, AllUrlList } from '@/utils/customAxios/type';

type UseSelectedStatusType = (
  method: Methods,
  url: AllUrlList,
  variable?: string,
) => { isLoading: boolean; error: AxiosError | null };

export const useSelectedStatus: UseSelectedStatusType = (
  method,
  url,
  variable = '',
) => {
  const slashedVariable = variable && ensuerEndingSlash(variable);
  const status = useSelector(
    (state: RootState) => state.status[`${method}_${url}${slashedVariable}`],
  );

  if (status === undefined) {
    return { isLoading: false, error: null };
  }

  const { isLoading, error } = status;

  return { isLoading, error };
};
