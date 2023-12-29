import styled from 'styled-components';
import theme from '@/styles/theme';
import Button from '@/components/Button';
import Logo from '@/assets/Logo';

const Index = () => {
  return (
    <IndexContainer>
      <IndexWrapper>
        <Logo />
        <Button size='wide'>시작하기</Button>
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
