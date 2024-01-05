import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '@/styles/theme';
import Button from '@/components/Button';
import Logo from '@/assets/Logo';

const Index = () => {
  const navigate = useNavigate();

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    // const token = localStorage.getItem('auth-token'); // 나중에 바낄지도 모름
    // navigate(token ? '/home' : '/sign');
    navigate('/home');
  };

  return (
    <IndexContainer>
      <IndexWrapper>
        <Logo />
        <Button size='wide' onClick={handleStart}>
          시작하기
        </Button>
      </IndexWrapper>
    </IndexContainer>
  );
};

const IndexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary[100]};
`;

const IndexWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Index;
