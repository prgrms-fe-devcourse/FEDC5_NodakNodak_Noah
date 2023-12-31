import {
  DropdownButton,
  BorderLine,
  ListItemButton,
  DropdownContent,
  MenuForm,
} from './DropdownMenuStyled';
import { useState } from 'react';

export interface Channel {
  _id: string;
  name: string;
}

interface DropdownMenuProps {
  channelList: Channel[];
  onClick?: (itemName: Channel) => void;
}

const DropdownMenu = ({ channelList, onClick }: DropdownMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [channelTitle, setChannelTitle] = useState('채널 선택');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: Channel) => {
    if (onClick) {
      onClick(item);
    }
    setChannelTitle(item.name);
    toggleMenu();
  };

  return (
    <MenuForm>
      <DropdownButton
        type='button'
        onClick={toggleMenu}
        $ismenuopen={isMenuOpen}>
        {channelTitle}
        <BorderLine />
        {isMenuOpen ? '>' : '<'}
      </DropdownButton>
      {isMenuOpen && (
        <DropdownContent>
          {channelList.map((item) => (
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
