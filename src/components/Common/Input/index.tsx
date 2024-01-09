import { forwardRef, Ref } from 'react';

import { InputProps } from '@/components/Common/Input/InputProps';
import { Wrapper, StyledInput } from '@/components/Common/Input/styledInput';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bordertype = 'filled',
      fontType = 'body3',
      underline = false,
      height,
      width = '400px',
      wrapperStyle,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <Wrapper style={wrapperStyle} ref={ref}>
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
