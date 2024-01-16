import { useNavigate, useParams } from 'react-router-dom';

import { Text, Button } from '@/components/common';
import { ContentHeaderWrapper } from '@/components/Main/ContentHeader/style';
import { useSelectedStatus } from '@/hooks/useSelectedStatus';
import { useSelectedChannel } from '@/hooks/useSelectedChannel';

const ContentHeader = () => {
  const { channelId } = useParams();
  const navigate = useNavigate();

  const handleWriteClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(`/write/${channelId ? channelId : 'unselected'}`);
  };

  const channel = useSelectedChannel();
  const fullPostStatus = useSelectedStatus('get', '/posts');
  const postByChannelStatue = useSelectedStatus(
    'get',
    '/posts/channel/',
    channelId,
  );

  const channelTitle = (() => {
    if (postByChannelStatue.isLoading) return '로딩중';
    if (!channelId && !fullPostStatus.isLoading) return '전체 글';
    if (postByChannelStatue.error && !postByChannelStatue.isLoading)
      return '채널을 찾을 수 없습니다.';
    if (channel) return channel.name;
    return '로딩중';
  })();

  return (
    <ContentHeaderWrapper>
      <Text tagType='span' fontType='h2'>
        {channelTitle}
      </Text>
      <Button styleType='ghost' size='small' onClick={handleWriteClick}>
        글 쓰기
      </Button>
    </ContentHeaderWrapper>
  );
};

export default ContentHeader;
