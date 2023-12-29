import { WrapperProps } from '@/components/Input/InputStyles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $flex?: boolean;
  wrapperProps?: WrapperProps;
  fontSize?: string;
  $underline?: boolean;
  $bordertype?:
    | 'enabled'
    | 'hover'
    | 'focus'
    | 'active'
    | 'filled'
    | 'error'
    | 'disabled';
}
