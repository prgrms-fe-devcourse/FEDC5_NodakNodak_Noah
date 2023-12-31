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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: Channel) => {
    if (onClick) {
      onClick(item);
    }
    toggleMenu();
  };

  return (
    <MenuForm>
      <DropdownButton
        type='button'
        onClick={toggleMenu}
        $ismenuopen={isMenuOpen}>
        채널 선택
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
