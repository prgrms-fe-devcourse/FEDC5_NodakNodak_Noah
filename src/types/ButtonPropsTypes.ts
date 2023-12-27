export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'ghost' | 'text' | 'danger';
  size?: 'mini' | 'small' | 'regular' | 'wide';
  event?: 'enabled' | 'hover' | 'click' | 'focus' | 'disabled';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  isArrow?: boolean;
}
