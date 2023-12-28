import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  user-select: none;
`;

export const TextWrapper = styled.span`
  display: inline-block;
  width: 30px;
  text-align: center;
  cursor: pointer;
`;

export const PageNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
