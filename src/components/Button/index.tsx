import { ButtonLayout, ButtonWrapper } from './StyledButton';
import { PropsWithChildren } from 'react';
import { ButtonProps } from '@/types/ButtonPropsTypes';

const Button = ({
  children,
  styleType = 'primary',
  size = 'regular',
  event = 'enabled',
  type,
  onClick,
  isArrow = false,
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
        $isArrow={isArrow}>
        {children}
        {isArrow && <span>{'>'}</span>}
      </ButtonLayout>
    </ButtonWrapper>
  );
};

export default Button;
