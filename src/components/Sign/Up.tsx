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
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

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
          fullName: 'sonhomin',
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
        $bordertype={pwWarn ? 'error' : 'filled'}
        onChange={(e) => setPW(e.target.value)}
      />

      <PasswordInput
        width='360px'
        height='48px'
        fontSize='20px'
        placeholder='Password'
        autoComplete='off'
        $bordertype={pwWarn ? 'error' : 'filled'}
        onChange={(e) => setConfirmPW(e.target.value)}
      />
      {pwWarn ? <Warning>{warnText}</Warning> : ''}
      <Guide>
        이미 노닥노닥과 함께라면
        <Register onClick={() => setIsLogin(!isLogin)}>
          로그인
          <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </Register>
      </Guide>
      <Button
        onClick={handleRegister}
        size='wide'
        styleType='primary'
        event='enabled'>
        가입하기
      </Button>
    </Form>
  );
};

export default Up;
