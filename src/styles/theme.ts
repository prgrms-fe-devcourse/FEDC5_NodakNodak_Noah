const isDark = localStorage.getItem('isDark') === 'true';

const theme = {
  colors: {
    primary: {
      100: '#FAF6E8',
      200: '#E3D4B3',
      300: '#C8B593',
      400: '#8D714D',
      500: '#5F3F21',
    },
    success: {
      100: '#F4FCE3',
      200: '#D8F5A2',
      300: '#94D82D',
      400: '#94D82D',
      500: '#5C940D',
    },
    error: {
      100: '#FFF5F5',
      200: '#FFA8A8',
      300: '#FF6B6B',
      400: '#F03E3E',
      500: '#C92A2A',
    },
    grayscale: {
      100: '#F9F9F9',
      200: '#DEE2E6',
      300: '#868E96',
      400: '#343A40',
      500: '#212529',
    },
    white: '#FFFFFF',
    black: '#000000',
  },
  fontSize: {
    h1: { size: '36px', weight: 'bold' },
    h2: { size: '32px', weight: 'bold' },
    h3: { size: '24px', weight: 'bold' },
    h4: { size: '20px', weight: 'bold' },
    body1: { size: '18px', weight: 'normal' },
    body2: { size: '16px', weight: 'normal' },
    body3: { size: '14px', weight: 'normal' },
    button1: { size: '18px', weight: 'bold' },
    button2: { size: '16px', weight: 'normal' },
    button3: { size: '12px', weight: 'normal' },
    caption: { size: '12px', weight: 'normal' },
  },
  isDark: isDark,
};

export default theme;
