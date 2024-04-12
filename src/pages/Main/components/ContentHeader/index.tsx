import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Text } from '@/components';
import { ContentHeaderWrapper } from '@/pages/Main/components/ContentHeader/style';

const ContentHeader = () => {
  const { channelId } = useParams();
  const navigate = useNavigate();
  const { state: channelName } = useLocation() as { state?: string };

  if (channelId && !channelName) navigate('/404');

  const handleWriteClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(`/write/${channelId ? channelId : 'unselected'}`);
  };

  return (
    <ContentHeaderWrapper>
      <Text tagType='span' fontType='h2'>
        {channelName ? channelName : '전체 글'}
      </Text>
      <Button styleType='ghost' size='small' onClick={handleWriteClick}>
        글 쓰기
      </Button>
    </ContentHeaderWrapper>
  );
};

export default ContentHeader;
