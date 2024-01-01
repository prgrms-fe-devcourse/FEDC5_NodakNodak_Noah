import { Channel } from '@/types/APIResponseTypes';

interface HeaderProps {
  channels: Pick<Channel, 'posts' | '_id' | 'name'>[];
  isAuth: boolean;
  userImage: string;
  seen?: boolean;
}

export default HeaderProps;
