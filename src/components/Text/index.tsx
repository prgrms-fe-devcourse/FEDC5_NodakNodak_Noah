import theme from '@/styles/theme';
import { TextProps } from '@/types/TextProps';

const Text = ({
  tagType = 'div',
  fontType = 'body1',
  colorType = 'primary',
  colorNumber = '100',
  children,
  ...props
}: TextProps) => {
  const Tag = tagType;
  const fontSize = theme.fontSize[fontType].size;
  const fontWeight = theme.fontSize[fontType].weight;

  let color = '';

  if (colorType === 'white' || colorType === 'black') {
    color = theme.colors[colorType];
  } else {
    colorNumber && (color = theme.colors[colorType][colorNumber]);
  }

  const textStyle = {
    fontSize,
    fontWeight,
    color,
  };

  return <Tag style={{ ...textStyle, ...props.style }}>{children}</Tag>;
};

export default Text;
