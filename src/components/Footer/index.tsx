import Text from '@/components/Common/Text';
import LogoWithFontSize from '@/components/LogoWithFontSize';
import { StyledFooter } from '@/components/Footer/styledFooter';

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
