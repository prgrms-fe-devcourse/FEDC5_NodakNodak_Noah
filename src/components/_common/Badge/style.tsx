import styled from 'styled-components';
import theme from '@/styles/theme';

export const BadgeContainer = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

export const Super = styled.sup`
  color: ${theme.colors.white};
  background-color: ${theme.colors.error[500]};
  position: absolute;
  top: 10%;
  right: 10%;
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 8px;
  color: white;
  border-radius: 20px;
  transform: translate(50%, -50%);
`;
