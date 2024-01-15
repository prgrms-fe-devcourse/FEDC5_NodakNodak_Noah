import theme from '@/styles/theme';

const HideEyesIcon = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 15 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_1236_1911)'>
        <path
          d='M12.81 5.40002C13.19 5.74002 13.51 6.07002 13.75 6.33002C13.9158 6.51378 14.0076 6.7525 14.0076 7.00002C14.0076 7.24755 13.9158 7.48627 13.75 7.67002C12.7 8.80002 10.31 11 7.51999 11H7.11999'
          stroke={theme.isDark ? theme.colors.white : theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
        <path
          d='M4.38999 10.13C3.23162 9.48125 2.18496 8.65067 1.28999 7.67C1.12415 7.48625 1.03235 7.24752 1.03235 7C1.03235 6.75248 1.12415 6.51375 1.28999 6.33C2.33999 5.2 4.72999 3 7.51999 3C8.61976 3.02299 9.6961 3.32216 10.65 3.87'
          stroke={theme.isDark ? theme.colors.white : theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
        <path
          d='M13.02 1.5L2.01999 12.5'
          stroke={theme.isDark ? theme.colors.white : theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
        <path
          d='M6.10999 8.41C5.7344 8.03665 5.52222 7.52958 5.51999 7C5.51999 6.46957 5.7307 5.96086 6.10578 5.58579C6.48085 5.21071 6.98956 5 7.51999 5C8.04957 5.00223 8.55664 5.21441 8.92999 5.59'
          stroke={theme.isDark ? theme.colors.white : theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
        <path
          d='M9.25999 8C9.08197 8.3043 8.82668 8.55614 8.51999 8.73'
          stroke={theme.isDark ? theme.colors.white : theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
        />
      </g>
      <defs>
        <clipPath id='clip0_1236_1911'>
          <rect
            width='14'
            height='14'
            fill='white'
            transform='translate(0.519989)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HideEyesIcon;
