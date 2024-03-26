import { Text } from '@/components';
import LogoWithFontSize from '@/components/layout/LogoWithFontSize';
import { StyledFooter } from '@/components/layout/Footer/style';

const Footer = () => {
  return (
    <StyledFooter>
      <LogoWithFontSize fontSize='40px' />
      <Text tagType='span' fontType='caption'>
        Copyright © 2023 ~ 2024 - All right reserved by Team Noah
      </Text>
    </StyledFooter>
  );
};

export default Footer;
