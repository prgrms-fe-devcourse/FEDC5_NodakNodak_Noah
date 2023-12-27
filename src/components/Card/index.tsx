import CardProps from './CardProps';
import { PropsWithChildren } from 'react';

const Card = ({
  width = '100px',
  height = '100px',
  shadowType = 'small',
}: PropsWithChildren<CardProps>) => {
  const ShadowSizes = {
    small: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    medium:
      '0px 4px 6px 0px rgba(0, 0, 0, 0.10),0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
    large:
      '0px 10px 15px 0px rgba(0, 0, 0, 0.10),0px 4px 6px 0px rgba(0, 0, 0, 0.10)',
    extra:
      '0px 20px 25px 0px rgba(0, 0, 0, 0.10),0px 8px 10px 0px rgba(0, 0, 0, 0.10)',
  };

  const CardStyle = {
    width,
    height,
    boxShadow: ShadowSizes[shadowType],
  };

  return <div style={CardStyle}></div>;
};

export default Card;
