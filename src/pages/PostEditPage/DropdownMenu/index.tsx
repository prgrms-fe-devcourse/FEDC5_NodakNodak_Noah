import {
  DropdownButton,
  BorderLine,
  ListItemButton,
  DropdownContent,
  MenuForm,
} from './DropdownMenuStyled';
import { useEffect, useState } from 'react';

export interface Channel {
  _id: string;
  name: string;
}

interface DropdownMenuProps {
  channelId: string;
  setChannelId: React.Dispatch<string>;
}

const DropdownMenu = ({ channelId, setChannelId }: DropdownMenuProps) => {
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
    const selectedChannel = itemListData.find((item) => item._id === channelId);
    setChannelTitle(selectedChannel ? selectedChannel.name : '채널 선택');
  }, [channelId]);

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
          {itemListData.map((item) => (
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

//임시 더미 데이터
const itemListData = [
  {
    authRequired: false,
    posts: [],
    _id: '6587c05d83003970282b863e',
    name: '연예',
    description: 'Test',
    createdAt: '2023-12-24T05:23:41.475Z',
    updatedAt: '2023-12-24T05:23:41.475Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '6587s',
    name: '스포츠',
    description: 'Test',
    createdAt: '2023-12-24T05:23:41.475Z',
    updatedAt: '2023-12-24T05:23:41.475Z',
    __v: 0,
  },
  {
    authRequired: false,
    posts: [],
    _id: '6587c',
    name: '잡담',
    description: 'Test',
    createdAt: '2023-12-24T05:23:41.475Z',
    updatedAt: '2023-12-24T05:23:41.475Z',
    __v: 0,
  },
];
