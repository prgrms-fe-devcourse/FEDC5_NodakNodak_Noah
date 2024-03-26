import { UserInfoWrapper } from '@/pages/PostUpdate/components/UserInfo/style';
import { Avatar, Text } from '@/components';
import theme from '@/styles/theme';

interface UserInfoProps {
  fullName?: string;
  imageSrc?: string;
}

const UserInfo = ({ fullName, imageSrc }: UserInfoProps) => {
  return (
    <UserInfoWrapper>
      <Avatar size='middle' alt={fullName || '유저네임'} src={imageSrc} />
      <Text
        colorType='grayscale'
        colorNumber={theme.isDark ? '100' : '500'}
        fontType='body1'
        tagType='span'
        style={{ margin: '0 10px' }}>
        {fullName || 'user'}
      </Text>
    </UserInfoWrapper>
  );
};

export default UserInfo;
