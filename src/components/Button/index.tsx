import { PropsWithChildren } from 'react';
import { ButtonLayout, ButtonWrapper } from '@/components/Button/style';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'ghost' | 'danger';
  size?: 'mini' | 'small' | 'regular' | 'wide';
  event?: 'enabled' | 'hover' | 'disabled';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type,
  onClick,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonWrapper $styleType={styleType} $size={size}>
      <ButtonLayout
        type={type}
        onClick={onClick}
        $styleType={styleType}
        $size={size}
        $event={event}
        $disabled={disabled}
        disabled={disabled}
        style={{ ...props.style }}>
        {children}
      </ButtonLayout>
    </ButtonWrapper>
  );
};

export default Button;
