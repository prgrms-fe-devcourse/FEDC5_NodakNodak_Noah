import { FormEvent, useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import PasswordInput from '@/components/common/Input/PasswordInput';
import { Button, Input } from '@/components/common';
import { Form, Guide, Register, Warning } from '@/components/Sign/style';
import axiosInstance from '@/utils/customAxios';
import { SignProps } from '@/components/Sign/type';

const Up = ({ isLogin, setIsLogin }: SignProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [warnText, setWarnText] = useState('');
  const [warn, setWarn] = useState([false, false, false]);

  const handleRegister = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const emptyCheck = [false, false, false, false];
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
      if (userName.trim() === '') {
        emptyCheck[3] = true;
        emptyFlag = true;
      }

      if (emptyFlag) {
        setWarnText('항목을 모두 채워주세요.');
        setWarn(emptyCheck);
        setTimeout(() => {
          setWarn([false, false, false, false]);
          setWarnText('');
        }, 3000);
        return;
      }

      const emailRegex = /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{3,}$/;

      if (!emailRegex.test(email)) {
        setWarnText('올바른 이메일 형식이 아닙니다.');
        setWarn([true, false, false, false]);
        setTimeout(() => {
          setWarn([false, false, false, false]);
          setWarnText('');
        }, 3000);
        return;
      }

      const userNameRegex = /^[a-zA-Z0-9가-힣]{2,8}$/;
      if (!userNameRegex.test(userName)) {
        setWarnText('별명은 2~8자의 영문, 한글, 숫자만 사용 가능합니다.');
        setWarn([false, false, false, true]);
        setTimeout(() => {
          setWarn([false, false, false, false]);
          setWarnText('');
        }, 3000);
        return;
      }

      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!passwordRegex.test(password)) {
        setWarnText(
          '비밀번호는 최소 8자리이며, 영문자와 숫자의 조합이 필요합니다.',
        );
        setWarn([false, true, true, false]);
        setTimeout(() => {
          setWarn([false, false, false, false]);
          setWarnText('');
        }, 3000);
        return;
      }

      if (password !== confirmPassword) {
        setWarnText('비밀번호가 일치하지 않습니다.');
        setWarn([false, true, true, false]);
        setTimeout(() => {
          setWarn([false, false, false, false]);
          setWarnText('');
        }, 3000);
        return;
      }

      try {
        await axiosInstance.post('signup', {
          fullName: userName,
          email,
          password,
        });
        alert('회원가입 성공');
        location.reload();
      } catch (e: unknown) {
        if (e instanceof AxiosError) {
          alert(e?.response?.data);
        }
      }
    },
    [confirmPassword, email, password, userName],
  );

  return (
    <Form>
      <Input
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='이메일'
        autoComplete='on'
        type='email'
        justifyContent='center'
        bordertype={warn[0] ? 'error' : 'filled'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='별명'
        autoComplete='on'
        justifyContent='center'
        bordertype={warn[3] ? 'error' : 'filled'}
        onChange={(e) => setUserName(e.target.value)}
      />
      <PasswordInput
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='비밀번호'
        autoComplete='off'
        bordertype={warn[1] ? 'error' : 'filled'}
        onChange={(e) => setPassword(e.target.value)}
      />

      <PasswordInput
        width='360px'
        height='48px'
        fontType='body3'
        placeholder='비밀번호 확인'
        autoComplete='off'
        bordertype={warn[2] ? 'error' : 'filled'}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {warnText !== '' ? <Warning>{warnText}</Warning> : ''}
      <Guide>
        이미 노닥노닥과 함께라면
        <Register onClick={() => setIsLogin(!isLogin)}>로그인</Register>
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
