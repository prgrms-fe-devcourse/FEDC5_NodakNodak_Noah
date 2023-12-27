import styled from 'styled-components';

export const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Super = styled.sup<{ isOnline: boolean; isFollowing: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  font-size: 12px;
  color: white;
  border-radius: 20px;
  background-color: ${({ isOnline }) =>
    isOnline ? 'var(--Success-300,#b3f17b)' : 'var(--Error-300,#f17b7b)'};

  &.dot {
    padding: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;

    border: 3px solid
      ${({ isFollowing }) =>
        isFollowing ? 'var(--Primary-200, #e3d4b3)' : 'white'};
  }
`;
