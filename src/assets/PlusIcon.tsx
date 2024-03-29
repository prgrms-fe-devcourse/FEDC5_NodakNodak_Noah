import theme from '@/styles/theme';

const PlusIcon = () => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 20 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1236_3644)'>
        <path
          d='M11 13.5C14.5899 13.5 17.5 10.5899 17.5 7C17.5 3.41015 14.5899 0.5 11 0.5C7.41015 0.5 4.5 3.41015 4.5 7C4.5 10.5899 7.41015 13.5 11 13.5Z'
          stroke={theme.colors.primary[400]}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11 4V10'
          stroke={theme.colors.primary[400]}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 7H14'
          stroke={theme.colors.primary[400]}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
