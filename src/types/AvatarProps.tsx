import { ReactNode } from 'react';

export const AvatarSizes = {
  small: 40,
  middle: 48,
  large: 224,
} as const;

export const ShapeToCssValue = {
  circle: '50%',
  square: '8px',
} as const;

export interface AvatarProps {
  src: string;
  size?: 'small' | 'middle' | 'large';
  shape?: 'circle' | 'square';
  defaultSrc?: string;
  alt?: string;
  mode?: 'cover' | 'contain';
}

export interface AvatarWrapperProps {
  shape: keyof typeof ShapeToCssValue;
}

export interface AvatarComponentProps extends AvatarProps {
  loaded: boolean;
}

export interface AvatarComponentWrapperProps extends AvatarWrapperProps {
  children: ReactNode;
}
