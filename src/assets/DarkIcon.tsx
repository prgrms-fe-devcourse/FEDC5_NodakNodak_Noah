import theme from '@/styles/theme';

const DarkIcon = () => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 15 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1236_3419)'>
        <path
          d='M12.75 10.48C11.5883 10.4729 10.4495 10.157 9.45014 9.56463C8.45083 8.97228 7.62703 8.12482 7.06321 7.10913C6.4994 6.09345 6.21585 4.94609 6.24164 3.78469C6.26743 2.6233 6.60164 1.48965 7.20999 0.5C5.60717 0.781382 4.16649 1.64934 3.16859 2.9348C2.17069 4.22026 1.68703 5.83116 1.81185 7.4537C1.93666 9.07624 2.66099 10.5942 3.84375 11.7119C5.02651 12.8297 6.58299 13.4671 8.20999 13.5C9.32312 13.5028 10.4181 13.218 11.3887 12.6731C12.3594 12.1282 13.1728 11.3418 13.75 10.39C13.4193 10.4446 13.0851 10.4747 12.75 10.48V10.48Z'
          stroke={theme.colors.black}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1236_3419'>
          <rect
            width='14'
            height='14'
            fill='white'
            transform='translate(0.75)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DarkIcon;
