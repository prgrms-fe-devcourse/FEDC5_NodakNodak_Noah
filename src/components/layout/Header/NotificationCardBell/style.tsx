import styled from 'styled-components';
import theme from '@/styles/theme';

export const NotificationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  border: 1px solid ${theme.colors.primary[300]};
  background-color: ${theme.isDark
    ? theme.colors.primary[400]
    : theme.colors.primary[100]};
  position: absolute;
  top: 100%;
  right: 80%;
  z-index: 3;
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 80px;
  align-items: center;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid
    ${theme.isDark ? theme.colors.primary[200] : theme.colors.primary[300]};
  margin-bottom: 8px;
`;

export const NotificationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 4px;
`;
