import { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PasswordInput from '@/components/_common/Input/PasswordInput';
import { Button, Input } from '@/components/_common';
import {
  Form,
  Guide,
  Register,
  SignProps,
  Warning,
} from '@/components/Sign/style';
import axiosInstance from '@/utils/customAxios';

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
        navigate('/home');
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
        <Register onClick={() => setIsLogin(!isLogin)}>
          회원가입
          <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </Register>
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
