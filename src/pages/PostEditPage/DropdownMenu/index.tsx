import {
  DropdownButton,
  BorderLine,
  ListItemButton,
  DropdownContent,
  MenuForm,
} from './DropdownMenuStyled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getChannel } from '@/slices/channel';
import { useDispatch, RootState } from '@/store';
import DownArrowIcon from '@/assets/DownArrowIcon';

export interface Channel {
  _id: string;
  name: string;
}

interface DropdownMenuProps {
  channelId: string;
  setChannelId: (value: string) => void;
}

const DropdownMenu = ({ channelId, setChannelId }: DropdownMenuProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannel());
  }, [dispatch]);

  const channels = useSelector((state: RootState) => state.channel.channels);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [channelTitle, setChannelTitle] = useState('채널 선택');

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
    <MenuForm>
      <DropdownButton
        type='button'
        onClick={toggleMenu}
        $ismenuopen={isMenuOpen}>
        {channelTitle}
        <BorderLine />
        <DownArrowIcon open={isMenuOpen} />
      </DropdownButton>
      {isMenuOpen && (
        <DropdownContent>
          {channels.map((item) => (
            <ListItemButton
              type='button'
              key={item._id}
              onClick={() => handleItemClick(item)}>
              {item.name}
            </ListItemButton>
          ))}
        </DropdownContent>
      )}
    </MenuForm>
  );
};

export default DropdownMenu;
