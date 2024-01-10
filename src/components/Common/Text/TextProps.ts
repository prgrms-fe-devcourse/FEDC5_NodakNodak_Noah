export interface TextProps {
  tagType: 'span' | 'p';
  fontType?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption';
  colorType?: 'primary' | 'grayscale' | 'black';
  colorNumber?: '100' | '200' | '300' | '400' | '500';
  children: string;
  style?: React.CSSProperties;
}
