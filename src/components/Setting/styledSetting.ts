import styled from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary[100]};
`;

export const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  max-width: 600px;
  padding: 2rem 2rem 4rem 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;
