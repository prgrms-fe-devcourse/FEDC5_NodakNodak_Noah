export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperStyle?: React.CSSProperties;
  underline?: boolean;
  fontType?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3';
  bordertype?:
    | 'enabled'
    | 'hover'
    | 'focus'
    | 'active'
    | 'filled'
    | 'error'
    | 'disabled';
}
