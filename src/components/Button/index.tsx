import { ButtonLayout, ButtonWrapper } from './StyledButton';
import { ButtonProps } from './ButtonPropsTypes';
import { PropsWithChildren } from 'react';

const Button = ({
  children,
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type,
  isArrow = false,
  onClick,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonWrapper
      $isActive={event === 'focus'}
      $styleType={styleType}
      $size={size}>
      <ButtonLayout
        type={type}
        onClick={onClick}
        $styleType={styleType}
        $size={size}
        $event={event}
        $isArrow={isArrow}
        $disabled={disabled}
        disabled={disabled}
        style={{ ...props.style }}>
        {children}
        {isArrow && <span>{'>'}</span>}
      </ButtonLayout>
    </ButtonWrapper>
  );
};

export default Button;
