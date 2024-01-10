import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/Logo';
import Button from '@/components/_common/Button';
import { IndexContainer, IndexWrapper } from '@/pages/IndexPage/style';

const Index = () => {
  const navigate = useNavigate();

  const handleStart = (e: React.MouseEvent) => {
    e.preventDefault();
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

export default Index;
