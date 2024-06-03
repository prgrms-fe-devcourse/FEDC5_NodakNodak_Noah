import { useQuery } from '@tanstack/react-query';
import { getChannel } from '@/apis/getChannel';

const useFetchChannel = (channelName: string) =>
  useQuery({
    queryKey: ['channels'],
    queryFn: () => (channelName ? getChannel(channelName) : null),
  });

export default useFetchChannel;
