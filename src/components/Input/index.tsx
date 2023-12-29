import { Wrapper, StyledInput } from './InputStyles';
import { InputProps } from '@/types/InputProps';

const Input = ({
  $flex = false,
  $bordertype = 'filled',
  $underline = false,
  required = false,
  disabled = false,
  readOnly = false,
  placeholder = '',
  wrapperProps,
  ...props
}: InputProps) => {
  return (
    <Wrapper $flex={$flex} {...wrapperProps}>
      <StyledInput
        $bordertype={$bordertype}
        $underline={$underline}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
