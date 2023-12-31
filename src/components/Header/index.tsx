import {
  StyledHeaderWrapper,
  ChannelWrapper,
  AuthUiWrapper,
} from './StyledHeader';
import HeaderProps from './HeaderProps';
import Text from '../Text';
import Button from '../Button';
import Avatar from '../Avatar';
import Badge from '../Badge';
import LogoWithFontSize from '../LogoWithFontSize';
import { useState } from 'react';
import Bell from '@/assets/Bell';
import Card from '@/components/Card';

const tempCount = 100000;

const Header = ({ channels, isAuth, userImage }: HeaderProps) => {
  const [seen, setSeen] = useState(false);
  const count = seen ? 0 : tempCount;

  return (
    <Card
      width='100vw'
      height='80px'
      style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledHeaderWrapper>
        <LogoWithFontSize fontSize='24px' />
        <ChannelWrapper>
          {channels.map((channel) => (
            <Text key={channel._id} tagType='span' fontType='h4'>
              {channel.name}
            </Text>
          ))}
        </ChannelWrapper>
        {isAuth ? (
          <AuthUiWrapper>
            <Badge count={count}>
              <Bell handleSeen={() => setSeen(true)} />
            </Badge>
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
