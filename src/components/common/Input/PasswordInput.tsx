import { useState } from 'react';

import { Wrapper, StyledInput, Eye } from '@/components/common/Input/style';
import { InputProps } from '@/components/common/Input/type';

const PasswordInput = ({
  bordertype = 'filled',
  fontType = 'body3',
  underline = false,
  height,
  width,
  ...props
}: InputProps) => {
  const [canSee, setCanSee] = useState(false);
  const handleEye = () => {
    setCanSee(!canSee);
  };

  return (
    <Wrapper>
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
