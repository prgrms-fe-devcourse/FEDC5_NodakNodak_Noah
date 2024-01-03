import {
  StyledHeaderWrapper,
  ChannelWrapper,
  AuthUiWrapper,
  LogoWrapper,
} from './StyledHeader';
import HeaderProps from './HeaderProps';
import Text from '../Text';
import Button from '../Button';
import Avatar from '../Avatar';
import Badge from '../Badge';
import LogoWithFontSize from '../LogoWithFontSize';
// import Notification from '../Notification';
import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import Bell from '@/assets/Bell';
import Card from '@/components/Card';
import { useDispatch } from '@/store';
import { setChannel } from '@/slices/channel';

const tempCount = 100000;

const Header = ({ channels, isAuth, userImage }: HeaderProps) => {
  const [seen, setSeen] = useState(false);
  const count = seen ? 0 : tempCount;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id: string) => () => {
    dispatch(setChannel(id));
  };

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
        {isAuth ? (
          <AuthUiWrapper>
            <Badge count={count}>
              <Bell handleSeen={() => setSeen(true)} />
            </Badge>
            {/* <Notification /> */}
            <Avatar size='small' src={userImage} />
          </AuthUiWrapper>
        ) : (
          <Button styleType='primary' size='small'>
            로그인
          </Button>
        )}
      </StyledHeaderWrapper>
    </Card>
  );
};

export default Header;
