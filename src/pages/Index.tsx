import styled from 'styled-components';
import theme from '@/styles/theme';
// import { ReactComponent as Logo } from '@/assets/Logo.svg';
import Button from '@/components/Button';

const Index = () => {
  return (
    <IndexContainer>
      <IndexWrapper>
        {/* <Logo /> */}
        <Button size='wide'>시작하기</Button>
      </IndexWrapper>
    </IndexContainer>
  );
};

const IndexContainer = styled.html`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary[100]};
`;

const IndexWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default Index;
