import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo';
import Button from '@/components/Button';
import Swipe from '@/pages/Introduce/components/Swipe';
import { IndexContainer, IndexWrapper, LogoContainer } from './style';

const Index = () => {
  const navigate = useNavigate();

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <IndexContainer>
      <IndexWrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Swipe />
        <Button size='wide' onClick={handleStart}>
          시작하기
        </Button>
      </IndexWrapper>
    </IndexContainer>
  );
};

export default Index;
