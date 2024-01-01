import { Form, Guide, Register, SignProps, Warning } from './SignStyle';
import Button from '../Button';
import Input from '../Input';
import PasswordInput from '../Input/PasswordInput';
import { useState } from 'react';
import axios from 'axios';

const Up = ({ isLogin, setIsLogin }: SignProps) => {
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [confirmPW, setConfirmPW] = useState('');
  const [pwWarn, setPwWarn] = useState(false);
  const [warnText, setWarnText] = useState('');
  const [emptyWarn, setEmptyWarn] = useState([false, false, false]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const emptyCheck = [false, false, false];
    let emptyFlag = false;
    if (email.trim() === '') {
      emptyCheck[0] = true;
      emptyFlag = true;
    }
    if (pw.trim() === '') {
      emptyCheck[1] = true;
      emptyFlag = true;
    }
    if (confirmPW.trim() === '') {
      emptyCheck[2] = true;
      emptyFlag = true;
    }

    if (emptyFlag) {
      setWarnText('항목을 모두 채워주세요.');
      setEmptyWarn(emptyCheck);
      setTimeout(() => {
        setEmptyWarn([false, false, false]);
        setWarnText('');
      }, 3000);
      return;
    }
    if (pw !== confirmPW) {
      setWarnText('비밀번호가 일치하지 않습니다.');
      setPwWarn(true);
      setTimeout(() => {
        setPwWarn(false);
        setWarnText('');
      }, 3000);
      return;
    }

    try {
      await axios.post('/api', {
        path: 'signup',
        method: 'POST',
        data: {
          fullName: `익명#${Math.floor(Math.random() * 100000)}`,
          email: email,
          password: pw,
        },
      });
      alert('회원가입 성공');
    } catch (e) {
      alert(e);
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
        bordertype={emptyWarn[0] ? 'error' : 'filled'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='Password'
        autoComplete='off'
        bordertype={pwWarn || emptyWarn[1] ? 'error' : 'filled'}
        onChange={(e) => setPW(e.target.value)}
      />

      <PasswordInput
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='Password'
        autoComplete='off'
        bordertype={pwWarn || emptyWarn[2] ? 'error' : 'filled'}
        onChange={(e) => setConfirmPW(e.target.value)}
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
