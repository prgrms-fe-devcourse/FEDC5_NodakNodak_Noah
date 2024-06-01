import { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@/components';
import PasswordInput from '@/components/Input/PasswordInput';
import { Form, Guide, Register, Warning } from '@/pages/Sign/components/style';
import axiosInstance from '@/utils/customAxios';
import { SignProps } from '../..';

const In = ({ isLogin, setIsLogin }: SignProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warnText, setWarnText] = useState('');
  const [warn, setWarn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const { data } = await axiosInstance.post('login', {
          email,
          password,
        });
        localStorage.setItem('auth-token', data.token);
        navigate('/home/all');
      } catch (e) {
        setWarnText('아이디 또는 비밀번호가 일치하지 않습니다.');
        setWarn(true);
        setTimeout(() => {
          setWarn(false);
          setWarnText('');
        }, 3000);
      }
    },
    [email, navigate, password],
  );

  return (
    <Form>
      <Input
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='Email'
        autoComplete='on'
        type='email'
        justifyContent='center'
        bordertype={warn ? 'error' : 'filled'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='Password'
        autoComplete='off'
        bordertype={warn ? 'error' : 'filled'}
        onChange={(e) => setPassword(e.target.value)}
      />
      {warn ? <Warning>{warnText}</Warning> : ''}
      <Guide>
        노닥노닥이 처음이라면?
        <Register onClick={() => setIsLogin(!isLogin)}>회원가입</Register>
      </Guide>
      <Button
        size='wide'
        styleType='primary'
        event='enabled'
        onClick={handleLogin}
        onKeyDown={(e) => {
          if (e.key === 'enter') handleLogin(e);
        }}>
        로그인
      </Button>
    </Form>
  );
};

export default In;
