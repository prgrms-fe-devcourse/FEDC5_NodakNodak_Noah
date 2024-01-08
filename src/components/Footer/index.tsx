import { StyledFooter } from './StyledFooter';
import LogoWithFontSize from '../LogoWithFontSize';
import Text from '../Text';

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
