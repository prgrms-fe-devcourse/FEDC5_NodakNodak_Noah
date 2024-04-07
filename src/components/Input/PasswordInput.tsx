import { useState } from 'react';
import HideEyesIcon from '@/assets/HideEyesIcon';
import ViewEyesIcon from '@/assets/ViewEyesIcon';
import { Eye, InputBox, InputElement } from '@/components/Input/style';
import { InputProps } from '.';

const PasswordInput = ({
  bordertype = 'filled',
  fontType = 'body3',
  underline = false,
  height,
  width,
  eyePosition,
  ...props
}: InputProps) => {
  const [canSee, setCanSee] = useState(false);
  const handleEye = () => {
    setCanSee(!canSee);
  };

  return (
    <InputBox>
      <InputElement
        $bordertype={bordertype}
        $fontType={fontType}
        $underline={underline}
        style={{ ...props.style, width, height }}
        type={canSee ? 'text' : 'password'}
        {...props}
      />
      <Eye onClick={handleEye} style={{ right: eyePosition }}>
        {canSee ? <HideEyesIcon /> : <ViewEyesIcon />}
      </Eye>
    </InputBox>
  );
};

export default PasswordInput;
