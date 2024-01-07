export interface AvatarProps {
  src?: string;
  size?: 'mini' | 'small' | 'middle' | 'large';
  alt?: string;
  style?: React.CSSProperties;
  onClick: () => void;
}
