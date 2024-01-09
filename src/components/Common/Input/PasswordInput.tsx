import { useState } from 'react';

import {
  Wrapper,
  StyledInput,
  Eye,
} from '@/components/Common/Input/styledInput';
import { InputProps } from '@/components/Common/Input/InputProps';

const PasswordInput = ({
  bordertype = 'filled',
  fontType = 'body3',
  underline = false,
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
        style={{ ...props.style, width, height }}
        type={canSee ? 'text' : 'password'}
        {...props}
      />
      <Eye onClick={handleEye} className='material-symbols-outlined'>
        {canSee ? 'visibility_off' : 'visibility'}
      </Eye>
    </Wrapper>
  );
};

export default PasswordInput;
