import {
  StyledHeaderWrapper,
  ChannelWrapper,
  LogoWrapper,
  SearchIcon,
  FormContainer,
  AuthUiWrapper,
} from './StyledHeader';
import HeaderProps from './HeaderProps';
import Text from '../Text';
import Button from '../Button';
import LogoWithFontSize from '../LogoWithFontSize';
import NotificationCardBell from '../NotificationCardBell';
import Input from '../Input';
import Avatar from '../Avatar';
import { ChangeEvent, RefObject, useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Card from '@/components/Card';
import useClickAway from '@/hooks/useClickAway';
import { useDispatch } from '@/store';
import { setChannel } from '@/slices/channel';
import { getNotificationArray } from '@/slices/notification/thunk';

const Header = ({ channels, isAuth, userImage }: HeaderProps) => {
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('auth-token');

  const handleClick = (id: string) => () => {
    dispatch(setChannel(id));
  };

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) return;
    setFocus(!focus);
  };

  const inputRef = useClickAway((e: MouseEvent | TouchEvent) => {
    const { tagName } = e.target as HTMLElement;
    if (tagName === 'input') return;
    if (inputValue !== '') return;
    if (!focus) return;
    setFocus(!focus);
  });

  const handleLogin = () => {
    navigate('/sign');
  };

  useEffect(() => {
    if (!token) return;
    dispatch(getNotificationArray({ token }));
  }, [dispatch, token]);

  return (
    <Card
      width='100vw'
      height='80px'
      style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledHeaderWrapper>
        <LogoWrapper onClick={() => navigate('/home')}>
          <LogoWithFontSize fontSize='24px' />
        </LogoWrapper>
        <ChannelWrapper>
          {channels.map((channel) => (
            <NavLink
              key={channel._id}
              to='home'
              onClick={handleClick(channel._id)}>
              <Text key={channel._id} tagType='span' fontType='h4'>
                {channel.name}
              </Text>
            </NavLink>
          ))}
        </ChannelWrapper>
        <FormContainer>
          <Input
            ref={inputRef as RefObject<HTMLInputElement>}
            height={'32px'}
            width={focus ? '160px' : '100px'}
            bordertype={focus ? 'focus' : 'filled'}
            underline={true}
            placeholder={focus ? '' : '     Find'}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleFocus}
          />
          {!focus && (
            <SearchIcon className='material-symbols-outlined'>
              search
            </SearchIcon>
          )}
        </FormContainer>
        {isAuth ? (
          <AuthUiWrapper>
            <NotificationCardBell />
            <Avatar size='small' src={userImage} />
          </AuthUiWrapper>
        ) : (
          <Button styleType='primary' size='small' onClick={handleLogin}>
            로그인
          </Button>
        )}
      </StyledHeaderWrapper>
    </Card>
  );
};

export default Header;
