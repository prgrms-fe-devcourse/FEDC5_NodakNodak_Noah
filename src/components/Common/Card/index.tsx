import { PropsWithChildren } from 'react';
import CardProps from '@/components/Common/Card/CardProps';

const Card = ({
  width = '100px',
  height = '100px',
  shadowType = 'medium',
  children,
  ...props
}: PropsWithChildren<CardProps>) => {
  const ShadowSizes = {
    medium:
      '0px 4px 6px 0px rgba(0, 0, 0, 0.10),0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
    large:
      '0px 10px 15px 0px rgba(0, 0, 0, 0.10),0px 4px 6px 0px rgba(0, 0, 0, 0.10)',
  };

  const CardStyle = {
    width,
    height,
    boxShadow: ShadowSizes[shadowType],
    ...props.style,
  };

  return <div style={CardStyle}>{children}</div>;
};

export default Card;
