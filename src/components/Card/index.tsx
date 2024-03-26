import { PropsWithChildren } from 'react';
import CardProps from '@/components/Card/type';
import theme from '@/styles/theme';

const Card = ({
  width = '100px',
  height = '100px',
  shadowType = 'medium',
  children,
  ...props
}: PropsWithChildren<CardProps>) => {
  const ShadowSizes = {
    medium: theme.isDark
      ? `0px 4px 6px 0px rgba(222, 226, 230, 0.10),0px 2px 4px 0px rgba(222, 226, 230, 0.10)`
      : `0px 4px 6px 0px rgba(0,0,0,0.10),0px 2px 4px 0px rgba(0,0,0, 0.10)`,
    large: theme.isDark
      ? `0px 4px 6px 0px rgba(222, 226, 230, 0.10),0px 2px 4px 0px rgba(222, 226, 230, 0.10)`
      : `0px 4px 6px 0px rgba(0,0,0,0.10),0px 2px 4px 0px rgba(0,0,0, 0.10)`,
  };
  const getBackgroundColor = () =>
    theme.isDark ? theme.colors.grayscale[400] : theme.colors.white;

  const CardStyle = {
    width,
    height,
    boxShadow: ShadowSizes[shadowType],
    backgroundColor: getBackgroundColor(),
    ...props.style,
  };

  return <div style={CardStyle}>{children}</div>;
};

export default Card;
