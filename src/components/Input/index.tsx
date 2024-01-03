import { Wrapper, StyledInput } from './InputStyles';
import { InputProps } from './InputProps';
import { forwardRef, Ref } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      bordertype = 'filled',
      fontType = 'body3',
      underline = false,
      required = false,
      disabled = false,
      readOnly = false,
      placeholder = '',
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
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          style={{ ...props.style, width, height }}
          {...props}
        />
      </Wrapper>
    );
  },
);

export default Input;
