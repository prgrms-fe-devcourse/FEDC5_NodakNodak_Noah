export interface AvatarProps {
  src: string;
  size?: 'mini' | 'small' | 'middle' | 'large';
  shape?: 'circle' | 'square';
  defaultSrc?: string;
  alt?: string;
  mode?: 'cover' | 'contain';
}
