import { Form, Guide, Register, SignProps } from './SignStyle';
import Input from '../Input';
import Button from '../Button';
import PasswordInput from '../Input/PasswordInput';
import React, { useState } from 'react';
import axios from 'axios';

const In = ({ isLogin, setIsLogin }: SignProps) => {
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
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
      alert('로그인 성공');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Form>
      <Input
        width='360px'
        height='48px'
        fontSize='20px'
        placeholder='Email'
        autoComplete='on'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        width='360px'
        height='48px'
        fontSize='20px'
        placeholder='Password'
        autoComplete='off'
        onChange={(e) => setPW(e.target.value)}
      />
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
        onClick={handleLogin}>
        로그인
      </Button>
    </Form>
  );
};

export default In;
