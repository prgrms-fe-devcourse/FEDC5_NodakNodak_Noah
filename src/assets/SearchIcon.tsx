import theme from '@/styles/theme';

const SearchIcon = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1236_3882)'>
        <path
          d='M5.92 11.34C8.91338 11.34 11.34 8.91338 11.34 5.92C11.34 2.92662 8.91338 0.5 5.92 0.5C2.92662 0.5 0.5 2.92662 0.5 5.92C0.5 8.91338 2.92662 11.34 5.92 11.34Z'
          stroke={theme.isDark ? theme.colors.white : theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
        />
        <path
          d='M13.5 13.5L9.75 9.75'
          stroke={theme.isDark ? theme.colors.white : theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
