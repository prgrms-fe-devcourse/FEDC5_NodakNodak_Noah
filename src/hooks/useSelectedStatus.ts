import { AxiosError } from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { AllUrlList, Methods } from '@/utils/customAxios/type';
import { ensureEndingSlash } from '@/utils/customAxios/utils';

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
  const slashedVariable = variable && ensureEndingSlash(variable);
  const status = useSelector(
    (state: RootState) => state.status[`${method}_${url}${slashedVariable}`],
  );

  if (status === undefined) {
    return { isLoading: false, error: null };
  }

  const { isLoading, error } = status;

  return { isLoading, error };
};
