import theme from '@/styles/theme';

const DownArrowIcon = ({ open }: { open: boolean }) => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: `rotate(${open ? '0deg' : '180deg'})` }}>
      <g transform='translate(0 4.2)'>
        <path
          d='M4.5 3.84998L10.65 9.99998C10.6949 10.0478 10.7491 10.0859 10.8093 10.112C10.8695 10.138 10.9344 10.1515 11 10.1515C11.0656 10.1515 11.1305 10.138 11.1907 10.112C11.2509 10.0859 11.3051 10.0478 11.35 9.99998L17.5 3.84998'
          stroke={theme.colors.grayscale[300]}
          strokeWidth='1.5'
        />
      </g>
    </svg>
  );
};

export default DownArrowIcon;
