import theme from '@/styles/theme';

const RightArrowIcon = ({
  flip = false,
  width = '22',
  height = '22',
}: {
  flip?: boolean;
  width?: string;
  height?: string;
}) => {
  const viewBoxX = (parseInt(width) - 30) / 2;
  const viewBoxY = (parseInt(height) - 30) / 2;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`${viewBoxX} ${viewBoxY} ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ transform: flip ? 'rotate(180deg)' : 'rotate(0deg)' }}>
      <g>
        <path
          d='M4.85 0.5L11 6.65C11.0478 6.69489 11.086 6.74911 11.112 6.80931C11.1381 6.8695 11.1515 6.9344 11.1515 7C11.1515 7.0656 11.1381 7.1305 11.112 7.19069C11.086 7.25089 11.0478 7.30511 11 7.35L4.85 13.5'
          stroke={theme.isDark ? '#ffffff' : '#000001'}
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
    </svg>
  );
};

export default RightArrowIcon;
