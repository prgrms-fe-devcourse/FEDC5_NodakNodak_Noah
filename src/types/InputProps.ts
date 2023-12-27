import { WrapperProps } from '@/components/Input/InputStyles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  flex?: boolean;
  wrapperProps?: WrapperProps;
  hint?: string;
  borderType?:
    | 'enabled'
    | 'hover'
    | 'focus'
    | 'active'
    | 'filled'
    | 'error'
    | 'disabled';
}
