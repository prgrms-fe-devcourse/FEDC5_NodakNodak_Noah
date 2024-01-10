import { forwardRef, Ref } from 'react';

import { InputProps } from '@/components/_common/Input/InputProps';
import { Wrapper, StyledInput } from '@/components/_common/Input/style';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bordertype = 'filled',
      fontType = 'body3',
      underline = false,
      height,
      width = '400px',
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <Wrapper ref={ref}>
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
