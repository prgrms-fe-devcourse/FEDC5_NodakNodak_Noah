import styled from 'styled-components';
import Button from '@/components/Button';
import theme from '@/styles/theme';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundWrapper>
        <h1>404 error</h1>
        <Button size='wide'>시작하기</Button>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.html`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary[100]};
`;

const NotFoundWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export default NotFound;
