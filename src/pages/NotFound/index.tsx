import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import {
  NotFoundContainer,
  NotFoundWrapper,
  TitleText,
} from '@/pages/NotFound/style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <TitleText>페이지를 찾을 수 없습니다</TitleText>
        <Button size='wide' onClick={() => navigate('/home')}>
          홈으로 돌아가기
        </Button>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
