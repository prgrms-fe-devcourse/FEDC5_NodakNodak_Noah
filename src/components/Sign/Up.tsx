import { Form, Guide, Register, SignProps, Warning } from './SignStyle';
import Button from '../Button';
import Input from '../Input';
import PasswordInput from '../Input/PasswordInput';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

const Up = ({ isLogin, setIsLogin }: SignProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [warnText, setWarnText] = useState('');
  const [warn, setWarn] = useState([false, false, false]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const emptyCheck = [false, false, false];
    let emptyFlag = false;
    if (email.trim() === '') {
      emptyCheck[0] = true;
      emptyFlag = true;
    }
    if (password.trim() === '') {
      emptyCheck[1] = true;
      emptyFlag = true;
    }
    if (confirmPassword.trim() === '') {
      emptyCheck[2] = true;
      emptyFlag = true;
    }

    if (emptyFlag) {
      setWarnText('항목을 모두 채워주세요.');
      setWarn(emptyCheck);
      setTimeout(() => {
        setWarn([false, false, false]);
        setWarnText('');
      }, 3000);
      return;
    }
    if (password !== confirmPassword) {
      setWarnText('비밀번호가 일치하지 않습니다.');
      setWarn([false, true, true]);
      setTimeout(() => {
        setWarn([false, false, false]);
        setWarnText('');
      }, 3000);
      return;
    }

    try {
      const axiosOptions = {
        url: `https://kdt.frontend.5th.programmers.co.kr:5003/signup`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          fullName: `익명#${Math.floor(Math.random() * 100000)}`,
          email,
          password,
        },
      };
      await axios(axiosOptions);
      alert('회원가입 성공');
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        alert(e?.response?.data);
      }
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
        bordertype={warn[0] ? 'error' : 'filled'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='Password'
        autoComplete='off'
        bordertype={warn[1] ? 'error' : 'filled'}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordInput
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='Password'
        autoComplete='off'
        bordertype={warn[2] ? 'error' : 'filled'}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {warnText !== '' ? <Warning>{warnText}</Warning> : ''}
      <Guide>
        이미 노닥노닥과 함께라면
        <Register onClick={() => setIsLogin(!isLogin)}>
          로그인
          <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </Register>
      </Guide>
      <Button
        size='wide'
        styleType='primary'
        event='enabled'
        onClick={handleRegister}
        onKeyDown={(e) => {
          if (e.key === 'enter') handleRegister(e);
        }}>
        가입하기
      </Button>
    </Form>
  );
};

export default Up;
