export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'ghost' | 'danger';
  size?: 'mini' | 'small' | 'regular' | 'wide';
  event?: 'enabled' | 'hover' | 'disabled';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface ImageUnloadButtonProps extends ButtonProps {
  setFile?: (file: File | null) => void;
  setImage: (image: string) => void;
  apiParam?: string;
}
