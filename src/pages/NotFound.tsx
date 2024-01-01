import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import theme from '@/styles/theme';

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

const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary[100]};
`;

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleText = styled.span`
  font-family: 'LOTTERIACHAB', sans-serif;
  font-size: 24px;
  color: ${theme.colors.primary[500]};
`;
export default NotFound;
