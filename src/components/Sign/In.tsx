import { Form, Guide, Register, SignProps, Warning } from './SignStyle';
import Input from '../Input';
import Button from '../Button';
import PasswordInput from '../Input/PasswordInput';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const In = ({ isLogin, setIsLogin }: SignProps) => {
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [warn, setWarn] = useState(false);
  const [warnText, setWarnText] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api', {
        path: 'login',
        method: 'POST',
        data: {
          email: email,
          password: pw,
        },
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
  };

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
        onChange={(e) => setPW(e.target.value)}
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
