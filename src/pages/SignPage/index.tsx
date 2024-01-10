import { useState } from 'react';
import { Container, Card, SignText } from '@/pages/SignPage/style';
import In from '@/components/Sign/In';
import Up from '@/components/Sign/Up';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container>
      <Card>
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
