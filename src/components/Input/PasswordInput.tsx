import { Wrapper, StyledInput, Eye } from './InputStyles';
import { useState } from 'react';
import { InputProps } from '@/types/InputProps';

const PasswordInput = ({
  bordertype = 'filled',
  fontType = 'body3',
  underline = false,
  required = false,
  disabled = false,
  readOnly = false,
  placeholder = '',
  height,
  width,
  wrapperStyle,
  ...props
}: InputProps) => {
  const [canSee, setCanSee] = useState(false);
  const handleEye = () => {
    setCanSee(!canSee);
  };

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
        width={width}
        height={height}
        style={{ ...props.style }}
      />
      <Eye onClick={handleEye} className='material-symbols-outlined'>
        {canSee ? 'visibility_off' : 'visibility'}
      </Eye>
    </Wrapper>
  );
};

export default PasswordInput;
