export interface AvatarProps {
  src: string;
  size?: 'small' | 'middle' | 'large';
  shape?: 'circle' | 'square';
  defaultSrc?: string;
  alt?: string;
  mode?: 'cover' | 'contain';
}
