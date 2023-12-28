import { Form, Guide, Register, SignProps } from './SignStyle';
import Input from '../Input';
import Button from '../Button';

const In = ({ isLogin, setIsLogin }: SignProps) => {
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
      <Guide>
        노닥노닥이 처음이라면?
        <Register onClick={() => setIsLogin(!isLogin)}>
          회원가입
          <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </Register>
      </Guide>
      <Button size='wide' styleType='primary' event='enabled'>
        로그인
      </Button>
    </Form>
  );
};

export default In;
