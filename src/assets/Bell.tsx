import theme from '@/styles/theme';

interface BellProps {
  handleSeen: () => void;
}

const Bell = ({ handleSeen }: BellProps) => {
  return (
    <svg
      onClick={handleSeen}
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      style={{ cursor: 'pointer', verticalAlign: 'middle' }}>
      <path
        d='M18.0001 3.6001C12.0354 3.6001 7.20008 8.43542 7.20008 14.4001V20.8545L5.92728 22.1273C5.41249 22.6421 5.25849 23.4163 5.53709 24.0889C5.8157 24.7615 6.47204 25.2001 7.20008 25.2001H28.8001C29.5281 25.2001 30.1845 24.7615 30.4631 24.0889C30.7417 23.4163 30.5877 22.6421 30.0729 22.1273L28.8001 20.8545V14.4001C28.8001 8.43542 23.9648 3.6001 18.0001 3.6001Z'
        fill={theme.colors.grayscale[500]}
      />
      <path
        d='M18 32.4001C15.0177 32.4001 12.6 29.9824 12.6 27.0001H23.4C23.4 29.9824 20.9824 32.4001 18 32.4001Z'
        fill={theme.colors.grayscale[500]}
      />
    </svg>
  );
};

export default Bell;
