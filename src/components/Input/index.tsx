import { Wrapper, StyledInput } from './InputStyles';
import { InputProps } from './InputProps';

const Input = ({
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
}: InputProps) => {
  return (
    <Wrapper style={wrapperStyle}>
      <StyledInput
        $bordertype={bordertype}
        $fontType={fontType}
        $underline={underline}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        style={{ ...props.style, width, height }}
      />
    </Wrapper>
  );
};

export default Input;
