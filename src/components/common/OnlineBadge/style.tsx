import styled from 'styled-components';
import theme from '@/styles/theme';

export const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Super = styled.sup<{ $isOnline: boolean; $isFollowing: boolean }>`
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
  background-color: ${({ $isOnline }) =>
    $isOnline ? theme.colors.success[300] : theme.colors.error[300]};

  &.dot {
    padding: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;

    box-shadow: 0px 1px 2px ${theme.colors.grayscale[500]};

    border: 3px solid
      ${({ $isFollowing }) =>
        $isFollowing ? theme.colors.info[300] : theme.colors.white};
  }
`;
