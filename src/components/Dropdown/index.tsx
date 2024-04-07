import { RefObject, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DownArrowIcon from '@/assets/DownArrowIcon';
import {
  BorderLine,
  DropDownItem,
  DropdownButton,
  DropdownList,
  MenuBox,
} from '@/components/Dropdown/style';
import useClickAway from '@/hooks/useClickAway';
import { getChannel } from '@/slices/channel/thunk';
import { RootState, useDispatch } from '@/store';

export interface Channel {
  _id: string;
  name: string;
}

export interface DropdownProps {
  channelId: string;
  setChannelId: (value: string) => void;
}

const DropdownMenu = ({ channelId, setChannelId }: DropdownProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannel());
  }, [dispatch]);

  const channels = useSelector((state: RootState) => state.channel.channels);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [channelTitle, setChannelTitle] = useState('채널 선택');
  const DropMenuRef = useClickAway((e) => {
    if (!(e.target as Element).classList.contains('DropdownButton')) {
      setIsMenuOpen(false);
    }
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: Channel) => {
    setChannelId(item._id);
    toggleMenu();
  };

  useEffect(() => {
    const selectedChannel = channels.find((item) => item._id === channelId);
    setChannelTitle(selectedChannel ? selectedChannel.name : '채널 선택');
  }, [channelId, channels]);

  return (
    <MenuBox>
      <DropdownButton
        type='button'
        onClick={toggleMenu}
        $isMenuOpen={isMenuOpen}
        className='DropdownButton'>
        {channelTitle}
        <BorderLine />
        <DownArrowIcon open={isMenuOpen} />
      </DropdownButton>
      {isMenuOpen && (
        <DropdownList ref={DropMenuRef as RefObject<HTMLUListElement>}>
          {channels.map((item) => (
            <DropDownItem
              type='button'
              key={item._id}
              onClick={() => handleItemClick(item)}>
              {item.name}
            </DropDownItem>
          ))}
        </DropdownList>
      )}
    </MenuBox>
  );
};

export default DropdownMenu;
