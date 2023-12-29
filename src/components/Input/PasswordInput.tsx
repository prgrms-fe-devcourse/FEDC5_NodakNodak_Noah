import { Wrapper, StyledInput, Eye } from './InputStyles';
import { useState } from 'react';
import { InputProps } from '@/types/InputProps';

const PasswordInput = ({
  flex = false,
  borderType = 'filled',
  required = false,
  disabled = false,
  readOnly = false,
  placeholder = '',
  wrapperProps,
  ...props
}: InputProps) => {
  const [canSee, setCanSee] = useState(false);
  const handleEye = () => {
    setCanSee(!canSee);
  };

  return (
    <Wrapper flex={flex} {...wrapperProps}>
      <StyledInput
        borderType={borderType}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        type={canSee ? 'text' : 'password'}
        placeholder={placeholder}
        {...props}
      />
      <Eye onClick={handleEye} className='material-symbols-outlined'>
        {canSee ? 'visibility_off' : 'visibility'}
      </Eye>
    </Wrapper>
  );
};

export default PasswordInput;
