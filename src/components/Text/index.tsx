import theme from '@/styles/theme';
import { TextProps } from '@/components/Text/type';

const Text = ({
  tagType = 'span',
  fontType = 'body1',
  colorType = 'black',
  colorNumber = '100',
  children,
  style,
}: TextProps) => {
  const Tag = tagType;
  const fontSize = theme.fontSize[fontType].size;
  const fontWeight = theme.fontSize[fontType].weight;

  let color = '';

  if (colorType === 'black') {
    color = theme.isDark ? theme.colors.white : theme.colors[colorType];
  } else {
    colorNumber && (color = theme.colors[colorType][colorNumber]);
  }

  const textStyle = {
    fontSize,
    fontWeight,
    color,
    ...style,
  };

  return <Tag style={textStyle}>{children}</Tag>;
};

export default Text;
