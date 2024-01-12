import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/Logo';
import Button from '@/components/common/Button';
import {
  IndexContainer,
  IndexWrapper,
  LogoContainer,
} from '@/pages/IndexPage/style';
import Swipe from '@/components/Index';

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
