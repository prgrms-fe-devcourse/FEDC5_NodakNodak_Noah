import {
  DropdownButton,
  BorderLine,
  ListItemButton,
  DropdownContent,
  MenuForm,
} from './DropdownMenuStyled';
import { useState } from 'react';
import { Channel } from '@/types/APIResponseTypes';

interface DropdownMenuProps {
  itemList: Channel[];
  title: string;
  onClick?: (itemName: Channel) => void;
}

const DropdownMenu = ({ itemList, title, onClick }: DropdownMenuProps) => {
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
      <DropdownButton onClick={toggleMenu} $ismenuopen={isMenuOpen}>
        {title}
        <BorderLine />
        {isMenuOpen ? '>' : '<'}
      </DropdownButton>
      {isMenuOpen && (
        <DropdownContent>
          {itemList.map((item) => (
            <ListItemButton
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