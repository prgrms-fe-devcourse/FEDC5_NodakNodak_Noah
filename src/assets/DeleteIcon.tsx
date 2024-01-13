import theme from '@/styles/theme';

const DeleteIcon = () => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 24 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ verticalAlign: 'middle' }}>
      <g>
        <path
          d='M11 13.5C14.5899 13.5 17.5 10.5899 17.5 7C17.5 3.41015 14.5899 0.5 11 0.5C7.41015 0.5 4.5 3.41015 4.5 7C4.5 10.5899 7.41015 13.5 11 13.5Z'
          stroke={theme.colors.error[400]}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8 7H14'
          stroke={theme.colors.error[400]}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
    </svg>
  );
};

export default DeleteIcon;
