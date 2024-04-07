import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@/assets/SearchIcon';
import { Avatar, Button, Card, Input, Text } from '@/components';
import { DropDownItem, DropdownList } from '@/components/Dropdown/style';
import DarkModeToggle from '@/components/layout/Header/DarkModeToggle';
import NotificationCardBell from '@/components/layout/Header/NotificationCardBell';
import LogoWithFontSize from '@/components/layout/LogoWithFontSize';
import useClickAway from '@/hooks/useClickAway';
import { useSelectedChannels } from '@/hooks/useSelectedChannel';
import { useSelectedMyInfo } from '@/hooks/useSelectedMyInfo';
import { setChannel } from '@/slices/channel';
import { getChannel } from '@/slices/channel/thunk';
import { getNotificationArray } from '@/slices/notification/thunk';
import { useDispatch } from '@/store';
import theme from '@/styles/theme';
import axiosInstance from '@/utils/customAxios';
import {
  AuthUiBox,
  ChannelList,
  FormElement,
  HeaderLayout,
  LogoBox,
  NavLinkBox,
} from './style';

const Header = () => {
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const channels = useSelectedChannels();
  const { role: myRole, image: myImage, _id: myId } = useSelectedMyInfo();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('auth-token');
  const menu = [
    '마이페이지',
    '비밀번호 변경',
    myRole === 'Regular' ? '문의하기' : '문의함',
    '로그아웃',
  ];

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/home?search=${inputValue}`);
  };

  const handleClick = (id: string) => () => {
    dispatch(setChannel(id));
  };

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) return;
    setFocus(!focus);
  };

  const handleAvatarClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = useCallback(
    async (item: string) => {
      if (!myId) return;
      switch (item) {
        case '마이페이지': {
          setShowMenu(false);
          navigate(`/user/${myId}`);
          break;
        }
        case '로그아웃': {
          const isLogout = window.confirm('로그아웃 하시겠습니까?');
          if (!isLogout) return;
          localStorage.removeItem('auth-token');
          await axiosInstance.post('/logout');
          location.reload();
          break;
        }
        case '문의하기': {
          setShowMenu(false);
          navigate('/request');
          break;
        }
        case '문의함': {
          setShowMenu(false);
          navigate('/admin', { state: myRole });
          break;
        }
        case '비밀번호 변경': {
          setShowMenu(false);
          navigate(`/user/${myId}/setting/password`, {
            state: myImage,
          });
          break;
        }
        default:
          break;
      }
    },
    [myId, myImage, myRole, navigate],
  );

  const inputRef = useClickAway((e: MouseEvent | TouchEvent) => {
    const { tagName } = e.target as HTMLElement;
    if (tagName === 'input') return;
    if (inputValue !== '') return;
    if (!focus) return;
    setFocus(!focus);
  });

  const menuRef = useClickAway((e: MouseEvent | TouchEvent) => {
    const { tagName } = e.target as HTMLElement;
    if (tagName === 'IMG') return;
    setShowMenu(false);
  });

  const handleLogin = () => {
    navigate('/sign');
  };

  useEffect(() => {
    if (!token) return;
    dispatch(getNotificationArray());
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getChannel());
  }, [dispatch]);

  return (
    <Card
      width='100vw'
      height='80px'
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}>
      <HeaderLayout>
        <LogoBox onClick={() => navigate('/home')}>
          <LogoWithFontSize fontSize='24px' />
        </LogoBox>
        <ChannelList>
          {channels.map(({ _id, name }) => (
            <NavLinkBox
              key={_id}
              to={`/home/${_id}`}
              onClick={handleClick(_id)}>
              <Text
                key={_id}
                tagType='span'
                fontType='h4'
                colorType='primary'
                colorNumber={theme.isDark ? '200' : '500'}>
                {name}
              </Text>
            </NavLinkBox>
          ))}
        </ChannelList>
        <FormElement onSubmit={handleSearch}>
          <Input
            ref={inputRef as RefObject<HTMLInputElement>}
            height={'32px'}
            width={focus ? '160px' : '100px'}
            underline
            placeholder='Find'
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleFocus}
          />
          <Button styleType='ghost' size='mini' style={{ padding: 0 }}>
            <SearchIcon />
          </Button>
        </FormElement>
        <DarkModeToggle />
        {token ? (
          <AuthUiBox>
            <NotificationCardBell />
            <Avatar
              size='small'
              src={myImage}
              onClick={handleAvatarClick}
              alt='유저네임'
            />

            {showMenu && (
              <DropdownList
                ref={menuRef as RefObject<HTMLUListElement>}
                style={{ borderRadius: '4px' }}>
                {menu.map((item) => (
                  <DropDownItem
                    type='button'
                    key={item}
                    onClick={() => handleMenuItemClick(item)}>
                    {item}
                  </DropDownItem>
                ))}
              </DropdownList>
            )}
          </AuthUiBox>
        ) : (
          <Button styleType='primary' size='small' onClick={handleLogin}>
            로그인
          </Button>
        )}
      </HeaderLayout>
    </Card>
  );
};

export default Header;
