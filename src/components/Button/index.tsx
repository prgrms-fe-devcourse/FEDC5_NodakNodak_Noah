import { ButtonLayout, ButtonWrapper } from './StyledButton';
import { PropsWithChildren } from 'react';
import { ButtonProps } from '@/types/ButtonPropsTypes';

const Button = ({
  children,
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type,
  isArrow = false,
  onClick,
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
        style={{ ...props.style }}>
        {children}
        {isArrow && <span>{'>'}</span>}
      </ButtonLayout>
    </ButtonWrapper>
  );
};

export default Button;
