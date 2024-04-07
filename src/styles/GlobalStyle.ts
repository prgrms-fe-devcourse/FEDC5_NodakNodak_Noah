import { createGlobalStyle } from 'styled-components';
import theme from '@/styles/theme';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Pretendard Variable', 'Noto Sans KR', sans-serif;
    color: ${theme.isDark ? theme.colors.white : theme.colors.black};
    background-color: ${
      theme.isDark ? theme.colors.grayscale[500] : theme.colors.white
    };
  }
`;
export default GlobalStyle;
