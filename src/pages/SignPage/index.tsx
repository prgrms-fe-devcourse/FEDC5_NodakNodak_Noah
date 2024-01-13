import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, SignText, GoHome } from '@/pages/SignPage/style';
import In from '@/components/Sign/In';
import Up from '@/components/Sign/Up';
import { Text } from '@/components/common';
import LeftArrowIcon from '@/assets/LeftArrowIcon';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <GoHome onClick={() => navigate('/home')}>
          <LeftArrowIcon />
          <Text
            tagType='span'
            colorType='grayscale'
            colorNumber='400'
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
