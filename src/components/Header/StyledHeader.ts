import styled from 'styled-components';

export const StyledHeaderWrapper = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  user-select: none;
`;

export const ChannelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const FormContainer = styled.form`
  position: relative;
  width: 160px;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 32px;
  top: 4px;
`;
export const AuthUiWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
