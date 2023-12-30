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
    | 'button1'
    | 'button2'
    | 'button3'
    | 'caption';
  colorType?:
    | 'primary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'grayscale'
    | 'white'
    | 'black';
  colorNumber?: '100' | '200' | '300' | '400' | '500';
  children: string;
  style?: React.CSSProperties;
}
