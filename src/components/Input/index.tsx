import { forwardRef, Ref } from 'react';

import { InputProps } from '@/components/Input/type';
import { Wrapper, StyledInput } from '@/components/Input/style';

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
