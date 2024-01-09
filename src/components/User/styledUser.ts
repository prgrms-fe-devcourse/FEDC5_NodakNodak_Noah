import styled from 'styled-components';
import theme from '@/styles/theme';

type LightnessType = 100 | 200 | 300 | 400 | 500;

export const UserInfoWrapper = styled.div`
  width: 60vw;
  max-width: 1440px;
  margin: 3rem auto;
`;
export const RightButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const GrassWrapper = styled.div`
  width: 224px;
  height: 80px;
  background-color: ${theme.colors.grayscale[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  border-radius: 4px;
`;

export const GrassItem = styled.div<{ lightness: LightnessType }>`
  width: 20px;
  height: 20px;
  background-color: ${({ lightness }) => theme.colors.success[lightness]};
  border-radius: 4px;

  box-shadow: 0 0 0 0.5px ${theme.colors.grayscale[200]};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 64px;
  gap: 20px;
`;

export const UserInfoWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const UserButtonContainer = styled.div`
  display: flex;
`;
