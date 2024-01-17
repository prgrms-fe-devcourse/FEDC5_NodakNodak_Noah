import styled from 'styled-components';
import theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[500]
    : theme.colors.primary[100]};
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[400]
    : theme.colors.white};
  width: 960px;
  height: 680px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 1px ${theme.colors.grayscale[300]};
  @media screen and (max-width: 900px) {
    width: 680px;
  }
  @media screen and (max-width: 600px) {
    width: 400px;
  }
`;

export const GoHome = styled.span`
  display: flex;
  align-items: baseline;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.8;
    transition-duration: 0.5s;
  }
`;

export const SignText = styled.h1`
  display: flex;
  font-size: 48px;
  margin-top: 72px;
  margin-bottom: 72px;
  width: 100%;
  justify-content: center;
  user-select: none;
`;
