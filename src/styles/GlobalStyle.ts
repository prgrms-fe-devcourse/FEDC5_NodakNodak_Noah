import theme from './theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

  body{
    font-family: 'Pretendard Variable', 'Noto Sans KR', sans-serif;
    color: ${theme.colors.black}
  }
`;
export default GlobalStyle;
