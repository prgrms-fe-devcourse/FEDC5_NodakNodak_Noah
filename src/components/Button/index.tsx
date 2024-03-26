import { PropsWithChildren } from 'react';

import { ButtonProps } from '@/components/Button/types';
import { ButtonLayout, ButtonWrapper } from '@/components/Button/style';

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
