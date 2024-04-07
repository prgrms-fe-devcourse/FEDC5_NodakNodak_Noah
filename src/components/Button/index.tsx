import { PropsWithChildren } from 'react';
import { ButtonBox, ButtonElement } from '@/components/Button/style';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'ghost' | 'danger';
  size?: 'mini' | 'small' | 'regular' | 'wide';
  event?: 'enabled' | 'hover' | 'disabled';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button = ({
  children,
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type = 'submit',
  onClick,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonBox $styleType={styleType} $size={size}>
      <ButtonElement
        type={type}
        onClick={onClick}
        $styleType={styleType}
        $size={size}
        $event={event}
        $disabled={disabled}
        disabled={disabled}
        style={{ ...props.style }}>
        {children}
      </ButtonElement>
    </ButtonBox>
  );
};

export default Button;
