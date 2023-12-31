export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'ghost' | 'text' | 'danger';
  size?: 'mini' | 'small' | 'regular' | 'wide';
  event?: 'enabled' | 'hover' | 'click' | 'focus' | 'disabled';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isArrow?: boolean;
}

export interface ImageUnloadButtonProps extends ButtonProps {
  setImage: (image: string) => void;
  apiParam: string;
}
