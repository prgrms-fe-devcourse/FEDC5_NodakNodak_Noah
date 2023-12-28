import { Form, Guide, Register, SignProps } from './SignStyle';
import Button from '../Button';
import Input from '../Input';

const Up = ({ isLogin, setIsLogin }: SignProps) => {
  return (
    <Form>
      <Input
        width='360px'
        height='48px'
        fontSize='20px'
        placeholder='Email'
        autoComplete='on'
        type='email'
      />
      <Input
        width='360px'
        height='48px'
        fontSize='20px'
        placeholder='Password'
        autoComplete='off'
        type='password'
      />

      <Input
        width='360px'
        height='48px'
        fontSize='20px'
        placeholder='Password'
        autoComplete='off'
        type='password'
      />

      <Guide>
        이미 노닥노닥과 함께라면
        <Register onClick={() => setIsLogin(!isLogin)}>
          로그인
          <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </Register>
      </Guide>
      <Button size='wide' styleType='primary' event='enabled'>
        가입하기
      </Button>
    </Form>
  );
};

export default Up;
