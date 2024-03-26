import { forwardRef, Ref } from 'react';

import { Wrapper, StyledInput } from '@/components/Input/style';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  underline?: boolean;
  fontType?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3';
  bordertype?:
    | 'enabled'
    | 'hover'
    | 'focus'
    | 'active'
    | 'filled'
    | 'error'
    | 'disabled';
  justifyContent?: 'center' | 'flex-start';

  eyePosition?: string;
  wrapperWidth?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bordertype = 'filled',
      fontType = 'body3',
      underline = false,
      justifyContent = 'flex-start',
      height,
      width = '400px',
      wrapperWidth = '100%',
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <Wrapper
        ref={ref}
        $justifyContent={justifyContent}
        style={{ width: wrapperWidth }}>
        <StyledInput
          $bordertype={bordertype}
          $fontType={fontType}
          $underline={underline}
          style={{ ...props.style, width, height }}
          {...props}
        />
      </Wrapper>
    );
  },
);

export default Input;
