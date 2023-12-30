export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  defaultSrc?: string;
  size: 'middle' | 'large';
  style?: React.CSSProperties;
}
