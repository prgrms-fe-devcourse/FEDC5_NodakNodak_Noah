import { Button } from '@/components/common';
import { ButtonWrapper } from '@/pages/PostPage/style';

interface SubmitButtonProps {
  onSubmit: () => void;
  message: string;
}

const SubmitButton = ({ onSubmit, message }: SubmitButtonProps) => {
  return (
    <ButtonWrapper>
      <Button
        styleType='primary'
        size='small'
        type='submit'
        event='enabled'
        onClick={onSubmit}>
        {message}
      </Button>
    </ButtonWrapper>
  );
};

export default SubmitButton;
