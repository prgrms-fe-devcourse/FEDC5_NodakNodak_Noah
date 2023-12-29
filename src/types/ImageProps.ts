export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  defaultSrc?: string;
  block?: boolean;
  mode?: 'cover' | 'fill' | 'contain';
  style?: React.CSSProperties;
}
