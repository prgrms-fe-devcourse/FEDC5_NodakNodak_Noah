import styled from 'styled-components';
import theme from '@/styles/theme';

export const AdminCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[400]
    : theme.colors.primary[100]};
  gap: 8px;
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

export const Legend = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  gap: 8px;
  width: 80%;
  height: 40px;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[300]
    : theme.colors.grayscale[300]};
`;

export const LegendRead = styled.span`
  width: 92px;
`;

export const RequestUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
  overflow-y: auto;
`;

export const RequestLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  gap: 8px;
  width: 100%;
  max-height: 100px;
  overflow-y: auto;
  background-color: ${theme.isDark
    ? theme.colors.grayscale[400]
    : theme.colors.success[100]};
  border-bottom: 1px solid black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    transition-duration: 0.3s;
  }
`;

export const FullName = styled.span`
  width: 100px;
`;

export const RequestMessage = styled.span`
  width: 200px;
  max-height: 100px;
  overflow-y: auto;
`;

export const RequestDate = styled.span`
  width: 100px;
`;

export const ChannelCreator = styled.span`
  display: flex;
`;
