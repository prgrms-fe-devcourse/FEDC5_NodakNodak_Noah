import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftArrowIcon from '@/assets/LeftArrowIcon';
import { Text } from '@/components';
import In from '@/pages/Sign/components/In';
import Up from '@/pages/Sign/components/Up';
import { Card, Container, GoHome, SignText } from '@/pages/Sign/style';
import theme from '@/styles/theme';

export interface SignProps {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <GoHome onClick={() => navigate('/home/all')}>
          <LeftArrowIcon />
          <Text
            tagType='span'
            colorType='grayscale'
            colorNumber={theme.isDark ? '100' : '400'}
            fontType='h4'>
            뒤로가기
          </Text>
        </GoHome>

        <SignText>{isLogin ? '로그인' : '회원가입'}</SignText>
        {isLogin ? (
          <In isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <Up isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </Card>
    </Container>
  );
};

export default Login;
