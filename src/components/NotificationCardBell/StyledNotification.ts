import styled from 'styled-components';

export const NotificationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  border: 1px solid wheat;
  background-color: white;
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
  border-bottom: 1px solid gray;
  margin-bottom: 8px;
`;

export const NotificationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 4px;
`;
