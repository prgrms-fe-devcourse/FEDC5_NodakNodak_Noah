import { NavLink } from 'react-router-dom';
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
  text-decoration: none;
`;

export const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;
`;

export const FormContainer = styled.form`
  display: flex;
  position: relative;
  width: 160px;
  flex-wrap: nowrap;
`;

export const SearchIcon = styled.span``;
export const AuthUiWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
