import {
  DropdownButton,
  BorderLine,
  ListItemButton,
  DropdownContent,
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
    onClick!(item);
    toggleMenu();
  };

  return (
    <div>
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
    </div>
  );
};

export default DropdownMenu;
