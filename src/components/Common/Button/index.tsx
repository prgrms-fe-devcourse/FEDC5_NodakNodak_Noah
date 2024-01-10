import { PropsWithChildren } from 'react';

import { ButtonProps } from '@/components/common/Button/ButtonProps';
import { ButtonLayout, ButtonWrapper } from '@/components/common/Button/style';

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
