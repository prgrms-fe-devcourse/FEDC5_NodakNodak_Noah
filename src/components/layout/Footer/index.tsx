import { Text } from '@/components';
import { FooterLayout } from '@/components/layout/Footer/style';
import LogoWithFontSize from '@/components/layout/LogoWithFontSize';

const Footer = () => {
  return (
    <FooterLayout>
      <LogoWithFontSize fontSize='40px' />
      <Text tagType='span' fontType='caption'>
        Copyright © 2023 ~ 2024 - All right reserved by Team Noah
      </Text>
    </FooterLayout>
  );
};

export default Footer;
