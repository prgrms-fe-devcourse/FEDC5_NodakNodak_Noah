import theme from '@/styles/theme';

const MailIcon = () => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 1.75H1.5C0.947715 1.75 0.5 2.19772 0.5 2.75V11.25C0.5 11.8023 0.947715 12.25 1.5 12.25H12.5C13.0523 12.25 13.5 11.8023 13.5 11.25V2.75C13.5 2.19772 13.0523 1.75 12.5 1.75Z'
        stroke={theme.isDark ? theme.colors.white : theme.colors.black}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M0.5 3L6.36 8C6.53969 8.14967 6.76615 8.23163 7 8.23163C7.23385 8.23163 7.46031 8.14967 7.64 8L13.5 3'
        stroke={theme.isDark ? theme.colors.white : theme.colors.black}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MailIcon;
